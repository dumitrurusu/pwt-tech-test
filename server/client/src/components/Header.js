import React, { Component } from "react";
import { connect } from "react-redux";
import Drawer from "./header_components/Drawer";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import LoginDialog from "./header_components/LoginDialog";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  button: {
    margin: theme.spacing.unit
  },
  font: {
    fontFamily: "Playfair Display SC"
  }
});

const Logo = styled.a`
  font-family: "Playfair Display SC", serif;
  font-size: 20px !important;
  color: black !important;
  @media screen and (max-width: 670px) {
    font-size: 15px !important;
  }
`;

class Header extends Component {
  renderContent() {
    const { classes } = this.props;
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Hidden only={["xs", "sm", "md"]}>
            <LoginDialog />
          </Hidden>
        );
      default:
        return (
          <Hidden only={["xs", "sm", "md"]}>
            <Button
              component={Link}
              to="/tickets"
              size="small"
              variant="contained"
              className={classes.button}
            >
              <Typography className={classes.font}>Dashboard</Typography>
            </Button>
            <a href={"/api/logout"} style={{ textDecoration: "none" }}>
              <Button
                size="small"
                variant="contained"
                className={classes.button}
              >
                <Typography className={classes.font}>Logout</Typography>
              </Button>
            </a>
          </Hidden>
        );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Hidden only={["xl", "lg"]}>
              <Drawer login="true" />
            </Hidden>
            <Hidden className={classes.flex}>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                <Logo href="/" style={{ textDecoration: "none" }}>
                  Prime Wording & Translations
                </Logo>
              </Typography>
            </Hidden>
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
