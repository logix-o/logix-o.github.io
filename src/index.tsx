import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { App } from 'app';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import configureStore from 'models';

const _store = configureStore()

const renderApp = () => (
    ReactDOM.render(
        <Provider store={_store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>,
        document.getElementById('root'),
    )
)

if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    (module as any).hot.accept('./app', renderApp)
}

renderApp()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
