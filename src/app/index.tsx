import React, { FunctionComponent, Fragment } from "react"
import { Switch, Route, useLocation, useHistory } from "react-router-dom"
import { _404Route } from "routes/_404"
import { ExampleDetailRoute } from "routes/example/detail"
import { ExampleListRoute } from "routes/example/list"
import { useTransition, animated } from 'react-spring'
import useRouteChange from 'components/hooks/useRouteChange'
import { SpringTransition } from "styles/spring"

export const App: FunctionComponent = () => {
    const location = useLocation()
    const history = useHistory()
    const transitions = useTransition(
        location,
        location => location.pathname,
        history.action === 'PUSH' ? SpringTransition.fromRight : SpringTransition.fromLeft,
    )

    useRouteChange()

    return (
        <Fragment>
            {
                transitions.map(({ item, props, key }) => (
                    /** 最多出现两个switch，用于描述一个路由页的消失和另一个路由页的出现 */
                    <animated.div
                        key={key}
                        style={props}
                        className='route'
                    >
                        <Switch location={item}>
                            {/** 仅渲染第一个匹配的路由 */}
                            <Route exact path='/example/list' component={ExampleListRoute} />
                            <Route exact path='/example/detail/:id' component={ExampleDetailRoute} />
                            <Route component={_404Route} />
                        </Switch>
                    </animated.div>
                ))
            }
        </Fragment>
    )
}