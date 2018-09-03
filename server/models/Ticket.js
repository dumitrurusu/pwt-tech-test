const mongoose = require("mongoose");
const { Schema } = mongoose;

const ticketSchema = new Schema({
  title: String,
  body: String,
  wording: Boolean,
  entryLanguage: String,
  outputLanguage: String,
  complete: Boolean,
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateCreated: Date,
  dateCompleted: Date
});

mongoose.model("tickets", ticketSchema);
