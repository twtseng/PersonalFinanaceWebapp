import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import BillDetails from './components/BillDetails';
import Pivot from './components/Pivot';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default () => {
  return (
      <Layout>
        <AuthorizeRoute exact path='/' component={Pivot} />
        <AuthorizeRoute path='/billDetails' component={BillDetails} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
  );
}

