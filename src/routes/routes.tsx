import React from "react";
import { Route, Switch } from 'react-router-dom';
import { Education } from "../containers/education";
import { Experience } from "../containers/experience";
import { Home } from "../containers/home";
import { Portfolio } from "../containers/portfolio";

const Routes = () =>
<Switch>
    <Route path="/portfolio" component={Portfolio}/>
    <Route path="/experience" component={Experience}/>
    <Route path="/education" component={Education}/>
    <Route path="/" component={Home}/>
</Switch>

export default Routes;