import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import Grid from "@material-ui/core/Grid";
import SubmitIcon from "@material-ui/icons/Send";
import * as actions from "../../actions/index";
import { withRouter } from "react-router-dom";

const styles = theme => ({
  font: {
    fontFamily: "Playfair Display SC",
    fontSize: "40px"
  },
  simpleFont: {
    fontWeight: "bold",
    fontSize: "20px"
  }
});

const TicketFormReview = ({
  onCancelForm,
  formValues,
  classes,
  submitTicket,
  history
}) => {
  return (
    <List>
      <Typography className={classes.font}>
        Please review your ticket
      </Typography>
      <Divider />
      <ListItem>
        <Typography className={classes.simpleFont}>Selected title:</Typography>
      </ListItem>
      <ListItem>
        <Typography>{formValues.title}</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography className={classes.simpleFont}>Selected body:</Typography>
      </ListItem>
      <ListItem>
        <Typography>{formValues.body}</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography className={classes.simpleFont}>
          Selected input language:
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>{formValues.entryLanguage}</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography className={classes.simpleFont}>
          Selected output language:
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>{formValues.outputLanguage}</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Typography className={classes.simpleFont}>
          Wording service option:
        </Typography>
      </ListItem>
      <ListItem>
        <Typography>
          {formValues.wording ? "Affirmative" : "Negative"}
        </Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Grid container spacing={8}>
          <Grid item xs={11} className={classes.flex}>
            <Button
              onClick={onCancelForm}
              variant="extendedFab"
              className={classes.button}
            >
              <BackIcon className={classes.extendedIcon} />
              Back
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={() => submitTicket(formValues, history)}
              variant="extendedFab"
              className={classes.button}
            >
              <SubmitIcon className={classes.extendedIcon} />
              Submit
            </Button>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.ticketForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(withRouter(TicketFormReview)));
