const express = require("express");
const router = express.Router();

const savedController = require("../controllers/savedController");

router.post("/create", savedController.Create);

router.get("/get-all-jobs-saved", savedController.getAllJobsSaved);

router.patch("/cancel-jobs-saved", savedController.cancelJobSaved);

//router.get("/findallbyrecruiter", jobController.GetJobByRecruiter);
//router.post("/login", authController.login);

module.exports = router;
