import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import * as actions from "../../actions/index";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
});

class TicketList extends Component {
  componentDidMount() {
    this.props.fetchTickets();
  }

  render() {
    const { classes, deleteTicket } = this.props;
    return (
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Your tickets</TableCell>
            <TableCell numeric>Input Language</TableCell>
            <TableCell numeric>Output Language</TableCell>
            <TableCell numeric>Wording Services</TableCell>
            <TableCell numeric>Date Created</TableCell>
            <TableCell numeric>Delete Ticket</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.tickets.map(ticket => {
            return (
              <TableRow key={ticket._id}>
                <TableCell component="th" scope="row">
                  {ticket.title}
                </TableCell>
                <TableCell numeric>{ticket.entryLanguage}</TableCell>
                <TableCell numeric>{ticket.outputLanguage}</TableCell>
                <TableCell numeric>
                  {ticket.wording ? "Affirmative" : "Negative"}
                </TableCell>
                <TableCell numeric>{ticket.dateCreated}</TableCell>
                <TableCell numeric>
                  <Button
                    onClick={() => deleteTicket(ticket._id)}
                    variant="fab"
                    aria-label="Delete"
                    className={classes.button}
                  >
                    <DeleteIcon className={classes.extendedIcon} />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }
}

function mapStateToProps({ tickets }) {
  return { tickets };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(TicketList));
