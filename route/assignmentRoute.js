const express = require("express");
const {
  assignmentCreateCtrl,
  getAllAssignments,
} = require("../controllers/assignmentCtrl");
const router = express.Router();
router.post("/create-assignment", assignmentCreateCtrl);
router.get("/get-assignments", getAllAssignments);
module.exports = router;
