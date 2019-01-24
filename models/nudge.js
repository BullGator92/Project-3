const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nudgeSchema = new Schema({
  Nudges: { type: String, required: true },
  Enabled: { type: boolean, required: true },
  Frequency: { type: String, required: true }
});


const Nudge = mongoose.model("Nudge", nudgeSchema);

module.exports = Nudge;
