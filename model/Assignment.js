const mongoose = require("mongoose");
const assignmentSchema = new mongoose.Schema({
  name: {
    required: [true, "Name is required"],
    type: String,
  },
  subject: {
    required: [true, "Subject is required"],
    type: String,
  },
  startDate: {
    required: [true, "Start date is required"],
    type: Date,
  },
  endDate: {
    required: [true, "End date is required"],
    type: Date,
  },
  startTime: {
    required: [true, "start Date is required"],
    type: String,
  },
  endTime: {
    required: [true, "end Time is required"],
    type: String,
  },
});
const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;
