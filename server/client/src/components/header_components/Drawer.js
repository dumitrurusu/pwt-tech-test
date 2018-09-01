import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  renderContent() {
    const { classes } = this.props;
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className={classes.list}>
            <List>
              <Typography style={{ fontFamily: "Playfair Display SC" }}>
                Login methods
              </Typography>
              <Divider />
              <a href="/auth/facebook" style={{ textDecoration: "none" }}>
                <ListItem button href="/auth/google">
                  <ListItemText
                    primary="Google"
                    style={{ fontFamily: "Playfair Display SC" }}
                  />
                </ListItem>
              </a>
              <a href="/auth/facebook" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText
                    primary="Facebook"
                    style={{ fontFamily: "Playfair Display SC" }}
                  />
                </ListItem>
              </a>
            </List>
          </div>
        );
      default:
        return (
          <a href="/api/logout" style={{ textDecoration: "none" }}>
            <ListItem button>
              <ListItemText
                primary="Logout"
                style={{ fontFamily: "Playfair Display SC" }}
              />
            </ListItem>
          </a>
        );
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          size="small"
          variant="contained"
          className={classes.button}
          onClick={this.toggleDrawer("left", true)}
        >
          <MenuIcon />
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {this.renderContent()}
          </div>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(TemporaryDrawer));
