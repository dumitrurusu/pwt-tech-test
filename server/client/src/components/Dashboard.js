import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FloatingNewButton from "./dashboard_components/FloatingNewButton";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import TicketList from "./tickets/TicketList";

const styles = theme => ({
  flex: {
    flexGrow: 1
  },
  font: {
    fontFamily: "Playfair Display SC",
    fontSize: "40px"
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <List>
        <ListItem>
          <Grid container spacing={8}>
            <Hidden>
              <Grid item xs={11} className={classes.flex}>
                <Typography className={classes.font}>My Dashboard</Typography>
              </Grid>
            </Hidden>
            <Grid item xs={1}>
              <FloatingNewButton />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem>
          <TicketList />
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles)(Dashboard);
