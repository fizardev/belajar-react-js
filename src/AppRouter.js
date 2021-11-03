import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/Page/App';
import Contact from './components/Page/Contact';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/contact" exact component={Contact}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;