import React, { Component } from 'react';
import { Switch, withRouter } from "react-router-dom";

import CRoute from '../custom-route/custom-route.js'

import Header from '../header/header.js'
import Login from '../login/login.js'
import Landing from '../landing/landing.js'
import PageNotFound from '../page-not-found/page-not-found.js'
import UnAuthorizedAccess from '../unauthorized-access/unauthorized-access.js'
import P1 from '../p1/p1.js'
import P2 from '../p2/p2.js'
import P3 from '../p3/p3.js'


class App extends Component {

  render() {
    const admin = "admin"
    const employee = "employee"
    return (    
        <div>
          <Header></Header>
          <Switch>
            <CRoute cprivate exact path="/"  component={Landing}></CRoute>
            <CRoute exact path="/login" component={Login}></CRoute>
            <CRoute exact cprivate crole={[admin,employee]} path="/p1" component={P1}></CRoute>
            <CRoute exact cprivate crole={[admin]} path="/p2" component={P2}></CRoute>
            <CRoute exact cprivate crole={[employee]}  path="/p3" component={P3}></CRoute>

            <CRoute exact path="/unauthorized-access" component={UnAuthorizedAccess}></CRoute>
            <CRoute  component={PageNotFound}></CRoute>           
          </Switch>
        </div>     
    );
  }
}

export default withRouter(App);
