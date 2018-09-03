import React, { Component } from "react";
import TicketForm from "./TicketForm";
import TicketFormReview from "./TicketFormReview";
import { reduxForm } from "redux-form";

class TicketNew extends Component {
  state = {
    showFormReview: false
  };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <TicketFormReview
          onCancelForm={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <TicketForm
        onTicketSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "ticketForm"
})(TicketNew);
