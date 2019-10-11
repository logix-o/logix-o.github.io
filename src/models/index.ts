import { createStore } from "redux"
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers'

export type AppState = ReturnType<typeof rootReducer>

export default function configureStore() {
    const store = createStore(rootReducer, devToolsEnhancer({}))

    if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
        (module as any).hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    }

    return store
}