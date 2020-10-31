import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import BillDetails from './components/BillDetails';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import AppContext from './components/AppContext';

import './custom.css'

export default () => {
  const [billsData, setBillsData] = React.useState([]);
  return (
    <AppContext.Provider value={{billsData, setBillsData}}>
      <Layout>
        <AuthorizeRoute exact path='/' component={Home} />
        <AuthorizeRoute path='/billDetails' component={BillDetails} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    </AppContext.Provider>
  );
}

