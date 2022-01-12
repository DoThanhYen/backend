const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
//const applicants = require("../models/applicant");

const Savedjobs = require("../models/saved");
const sequelize = require("../config/db.sequelize");
const { QueryTypes } = require("sequelize");
class SavedController {
  //[POST]  jobs/create
  async Create(req, res) {
    try {
      const data = await Savedjobs.findOne({
        where: {
          applicant_id: req.id,
          job_id: req.body.job_id,
        },
      });
      if (data) {
        if (data.is_deleted == 1) {
          Savedjobs.update(
            {
              is_deleted: 0,
            },
            {
              where: {
                applicant_id: req.id,
                job_id: req.body.job_id,
              },
            }
          );
          res.json({
            message: "Bạn đã lưu khôi phục công việc này !",
          });
        } else {
        
          res.json({
            message: "Bạn đã lưu công việc này !",
          });
        }
      } else {
        await Savedjobs.create({
          applicant_id: req.id,
          job_id: req.body.job_id,
          is_deleted: false,
        });
        res.json({
          message: "Thêm mới thành công !",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
  async getAllJobsSaved(req, res) {
    try {
      const jobs = await sequelize.query(
        `SELECT jobs.id, jobs.recruiter_id,jobs.title,jobs.description,jobs.type,jobs.salary,jobs.experience,jobs.location,jobs.state,jobs.category,jobs.category,jobs.starttime,jobs.deleted_at,jobs.extraskills,jobs.requireskills,jobs.befenit,jobs.is_deleted,jobs.createdAt,jobs.updatedAt FROM jobs JOIN saveds ON jobs.id = saveds.job_id WHERE saveds.applicant_id=${req.id} AND saveds.is_deleted=0`,
        { type: QueryTypes.SELECT }
      );
      res.json(jobs);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  async cancelJobSaved(req, res) {
    try {
      await sequelize.query(
        `UPDATE saveds SET saveds.is_deleted=1 WHERE saveds.applicant_id=${req.id} AND saveds.job_id=${req.body.job_id}`
      );

      res.json({ message: "Bạn đã xóa công việc ra khỏi danh sách lưu" });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
}

module.exports = new SavedController();
