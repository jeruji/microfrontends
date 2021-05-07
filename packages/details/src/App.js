import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Switch, Route, Router } from 'react-router';
import Details from './components/Details';

const generateClassName = createGenerateClassName({
    productionPrefix: 'de',
})

export default({ history }) => {
    return(
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path="/details" component={Details} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}