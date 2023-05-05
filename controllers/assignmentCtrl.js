const Assignment = require("../model/Assignment");

const assignmentCreateCtrl = async (req, res, next) => {
  try {
    const assignment = await Assignment.create({
      name: req?.body?.name,
      subject: req?.body?.subject,
      startDate: req?.body?.startDate,
      endDate: req?.body?.endDate,
      startTime: req?.body?.startTime,
      endTime: req?.body?.endTime,
    });
    res.json(assignment);
  } catch (error) {
    next(error);
  }
};

const getAllAssignments = async (req, res, next) => {
  try {
    const assignments = await Assignment.find({});
    res.json(assignments);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  assignmentCreateCtrl,
  getAllAssignments,
};
