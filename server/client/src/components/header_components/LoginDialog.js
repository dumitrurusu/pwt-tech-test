import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  button: {
    margin: theme.spacing.unit
  },
  font: {
    fontFamily: "Playfair Display SC",
    fontSize: "20px"
  }
});

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  render() {
    const { classes, onClose, ...other } = this.props;

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby="simple-dialog-title"
        {...other}
      >
        <DialogTitle id="simple-dialog-title">
          <Typography className={classes.font}>Login method</Typography>
        </DialogTitle>
        <Divider />
        <div>
          <List>
            <a href="/auth/google" style={{ textDecoration: "none" }}>
              <ListItem button className={classes.button}>
                <ListItemText primary="Google" className={classes.font} />
              </ListItem>
            </a>
            <a href="/auth/facebook" style={{ textDecoration: "none" }}>
              <ListItem button className={classes.button}>
                <ListItemText primary="Facebook" className={classes.font} />
              </ListItem>
            </a>
          </List>
        </div>
      </Dialog>
    );
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = value => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} variant="contained">
          <Typography style={{ fontFamily: "Playfair Display SC" }}>
            Login
          </Typography>
        </Button>
        <SimpleDialogWrapped
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SimpleDialogDemo);
