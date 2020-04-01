import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from './components/Layout'
import User from './pages/User'
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./App.css";

//Enabling Tooltips:
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <User></User>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}