import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import NextIcon from "@material-ui/icons/NavigateNext";
import Grid from "@material-ui/core/Grid";
import CancelIcon from "@material-ui/icons/Cancel";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  },
  font: {
    fontFamily: "Playfair Display SC",
    fontSize: "40px"
  },
  textField: {
    width: 700
  },
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

const renderTextField = ({ input, label, meta, ...custom }) => (
  <TextField
    label={label}
    error={meta.touched && meta.error ? true : false}
    helperText={meta.touched && meta.error}
    {...input}
    {...custom}
  />
);
const renderMultilineTextField = ({ input, label, meta, ...custom }) => (
  <TextField
    label={label}
    multiline
    rows="24"
    margin="normal"
    error={meta.touched && meta.error ? true : false}
    helperText={meta.error && meta.error}
    {...input}
    {...custom}
  />
);
const renderCheckbox = ({ input, label }) => (
  <FormControlLabel
    control={
      <Checkbox
        color="default"
        checked={input.value ? true : false}
        onChange={input.onChange}
      />
    }
    label={label}
  />
);

class TicketForm extends React.Component {
  state = {
    wording: true
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { handleSubmit, classes } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.onTicketSubmit)}>
        <List>
          <Typography className={classes.font}>New ticket</Typography>
          <ListItem>
            <Field
              name="title"
              component={renderTextField}
              label="Ticket Title"
            />
          </ListItem>
          <ListItem>
            <Field
              name="body"
              component={renderMultilineTextField}
              label="Text Body"
              className={classes.textField}
            />
          </ListItem>
          <ListItem>
            <Field
              name="entryLanguage"
              component={renderTextField}
              label="Input Text Language"
            />
          </ListItem>
          <ListItem>
            <Field
              name="outputLanguage"
              component={renderTextField}
              label="Output Text Language"
            />
          </ListItem>
          <ListItem>
            <Field
              name="wording"
              component={renderCheckbox}
              label="Wording services"
            />
          </ListItem>
          <ListItem>
            <Grid container spacing={8}>
              <Grid item xs={11} className={classes.flex}>
                <Button
                  component={Link}
                  to="/tickets"
                  variant="extendedFab"
                  className={classes.button}
                >
                  <CancelIcon className={classes.extendedIcon} />
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  type="submit"
                  variant="extendedFab"
                  className={classes.button}
                >
                  <NextIcon className={classes.extendedIcon} />
                  Next
                </Button>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </form>
    );
  }
}

TicketForm.propTypes = {
  classes: PropTypes.object.isRequired
};

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "You must provide a title";
  }
  if (!values.body) {
    errors.body = "You must provide a body";
  }
  if (!values.entryLanguage) {
    errors.entryLanguage = "You must provide an input language";
  }
  if (!values.outputLanguage) {
    errors.outputLanguage = "You must provide an output language";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "ticketForm",
  destroyOnUnmount: false
})(withStyles(styles)(TicketForm));
