import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Hidden from "@material-ui/core/Hidden";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const TicketNew = () => <h2>TicketNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <Grid container spacing={12}>
        <Hidden>
          <Grid item xs={2} />
        </Hidden>
        <Grid item xs={8}>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/tickets" component={Dashboard} />
              <Route path="/tickets/new" component={TicketNew} />
            </div>
          </BrowserRouter>
        </Grid>
        <Hidden>
          <Grid item xs={2} />
        </Hidden>
      </Grid>
    );
  }
}

export default connect(
  null,
  actions
)(App);
