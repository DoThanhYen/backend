const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
//const applicants = require("../models/applicant");
const Savedjobs = require("../models/saved");
class SavedController {
  //[POST]  jobs/create
  async Create(req, res) {
    try {
      await Savedjobs.create({
        applicant_id: req.id,
        job_id: req.body.job_id,
        is_deleted: false,
      });
      res.json({
        message: "Thêm mới thành công !",
      });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
}

module.exports = new SavedController();
