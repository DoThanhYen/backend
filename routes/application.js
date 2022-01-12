const express = require("express");
const router = express.Router();

const applicationController = require("../controllers/applicationController");

router.post("/create", applicationController.Create);

router.get("/get-all-jobs-application", applicationController.getAllJobApplication);

router.patch("/cancel-jobs-application", applicationController.cancelJobApplication);

router.get("/get-applicant-by-job", applicationController.getApplicantByJob);

module.exports = router;
