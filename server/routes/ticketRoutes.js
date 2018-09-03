const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const bodyParser = require("body-parser");

const Ticket = mongoose.model("tickets");

var jsonParser = bodyParser.json();

module.exports = app => {
  app.get("/api/tickets", requireLogin, async (req, res) => {
    const tickets = await Ticket.find({ _user: req.user.id }).select({
      body: false
    });

    res.send(tickets);
  });

  app.post("/api/tickets", requireLogin, jsonParser, async (req, res) => {
    const { title, body, wording, entryLanguage, outputLanguage } = req.body;

    const ticket = new Ticket({
      title,
      body,
      wording,
      entryLanguage,
      outputLanguage,
      dateCreated: Date.now(),
      _user: req.user.id
    });

    try {
      const user = await ticket.save();
      res.send(user);
    } catch (err) {
      res.send(422).send(err);
    }
  });

  app.delete("/api/tickets", requireLogin, jsonParser, async (req, res) => {
    const id = req.query.id;
    await Ticket.deleteOne({ _id: id });

    const tickets = await Ticket.find({ _user: req.user.id }).select({
      body: false
    });
    res.send(tickets);
  });
};
