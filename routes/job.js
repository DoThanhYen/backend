const express = require("express");
const router = express.Router();

const jobController = require("../controllers/jobController");

router.post("/create", jobController.Create);

router.get("/findallbyrecruiter", jobController.GetJobByRecruiter);
//router.post("/login", authController.login);

module.exports = router;
