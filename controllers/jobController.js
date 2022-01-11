const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
//const applicants = require("../models/applicant");
const jobs = require("../models/job");
class JobController {
  //[POST]  jobs/create
  async Create(req, res) {
    try {
      await jobs.create({
        recruiter_id: req.id,
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        salary: req.body.salary,
        experience: req.body.experience,
        location: req.body.location,
        experience: req.body.experience,
        state: false,
        category: req.body.category,
        starttime: req.body.starttime,
        extraskills: req.body.extraskills,
        requireskills: req.body.requireskills,
        befenit: req.body.befenit,
        is_deleted: false,
      });
      res.json({
        message: "Thêm mới thành công !",
      });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  //[GET]  jobs/getbyrecruiter
  async GetJobByRecruiter(req, res) {
    try {
      const job = await jobs.findAll({ where: { recruiter_id: req.id } });
      if (job.length <= 0) {
        res.status(401).sendStatus("Bạn chưa đăng công việc nào !");
      }
      res.json(job);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = new JobController();
