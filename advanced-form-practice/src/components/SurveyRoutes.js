import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Home';
import Inventory from './Inventory';
import InventoryReport from './InventoryReport';
import SampleSurvey from './SampleSurvey';

const SurveyRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sample">
          <SampleSurvey />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/report">
          <InventoryReport />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default SurveyRoutes;
