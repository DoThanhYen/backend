const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/signup/applicant", authController.signupApplicant);

router.post("/signup/recruiter", authController.signupRecruiter);

router.post("/signup/admin", authController.signupAdmin);

router.post("/login/applicant", authController.loginApplicant);

router.post("/login/recruiter", authController.loginRecruiter);

router.post("/login/admin", authController.loginAdmin);

module.exports = router;
