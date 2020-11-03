import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import BillDetails from './components/BillDetails';
import Pivot from './components/Pivot';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';
import Test from './components/Test';
import AppContext from './components/AppContext';
import ExpenseData from './components/ExpenseData';

import './custom.css'
const expenseData = new ExpenseData();
export default () => {
  return (
    <AppContext.Provider value={{expenseData}}>
      <Layout>
        <AuthorizeRoute exact path='/' component={Pivot} />
        <AuthorizeRoute path='/billDetails' component={BillDetails} />
        <AuthorizeRoute path='/test' component={Test} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    </AppContext.Provider>  
  );
}

