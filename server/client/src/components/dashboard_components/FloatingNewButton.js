import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  flex: {
    flexGrow: 1
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        component={Link}
        to="/tickets/new"
        variant="fab"
        aria-label="Add"
        className={classes.button}
      >
        <AddIcon />
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
