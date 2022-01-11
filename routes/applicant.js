const express = require("express");
const router = express.Router();

const applicantController = require("../controllers/applicantController");

router.patch("/update", applicantController.Update);

router.post("/savedjob", applicantController.Saved);

router.post("/apply", applicantController.Application);

module.exports = router;
