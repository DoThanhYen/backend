const express = require("express");
const router = express.Router();

const recruiterController = require("../controllers/recruiterController");

router.patch("/update", recruiterController.Update);

module.exports = router;
