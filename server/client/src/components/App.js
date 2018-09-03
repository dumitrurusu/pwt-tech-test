import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Hidden from "@material-ui/core/Hidden";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import TicketNew from "./tickets/TicketNew";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core";
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    minHeight: "250px"
  }
});

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16}>
        <Hidden>
          <Grid item xs={2} />
        </Hidden>
        <Grid item xs={8}>
          <BrowserRouter>
            <div>
              <Header />
              <div style={{ paddingTop: "50px" }}>
                <Paper className={classes.root}>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/tickets" component={Dashboard} />
                  <Route path="/tickets/new" component={TicketNew} />
                </Paper>
              </div>
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
)(withStyles(styles)(App));
