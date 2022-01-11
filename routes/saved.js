const express = require("express");
const router = express.Router();

const savedController = require("../controllers/savedController");

router.post("/create", savedController.Create);

//router.get("/findallbyrecruiter", jobController.GetJobByRecruiter);
//router.post("/login", authController.login);

module.exports = router;
