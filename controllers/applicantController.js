const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const applicants = require("../models/applicant");
const Savedjobs = require("../models/saved");
const application = require("../models/application");
class ApplicantController {
  //[POST]  applicant/create
  async Update(req, res) {
    try {
      await applicants.update(
        {
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          experience: req.body.experience,
          skills: req.body.skills,
          education: req.body.education,
          resume: req.body.resume,
          image: req.body.id,
          birthday: req.body.birthday,
          gender: req.body.gender,
          is_deleted: false,
        },
        {
          where: {
            id: req.id,
          },
        }
      );
      res.json({
        message: "Cập nhật tài khoản thành công!",
      });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  //[POST]  applicants/savedjob
  async Saved(req, res) {
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

  //[POST]  applicants/apply
  async Application(req, res) {
    try {
      await application.create({
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

module.exports = new ApplicantController();
