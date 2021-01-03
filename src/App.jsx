import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Form from './containers/Form';
import Text from './containers/Text';

const App = () => {
    return (
        <BrowserRouter>
            <Layout />
            <Switch>
                <Route exact path='/text' component={Text} />
                <Route exact path='/text/form' component={Form} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;