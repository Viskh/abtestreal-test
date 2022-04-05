const mongoose = require("mongoose");

const dateSchema = mongoose.Schema({
  registration: {
    type: String,
    required: true,
  },
  lastVisit: {
    type: String,
    required: true,
  },
});

const Date = mongoose.model("Date", dateSchema);

module.exports = Date;
