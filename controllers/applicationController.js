const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
//const applicants = require("../models/applicant");

const Applications = require("../models/application");
const sequelize = require("../config/db.sequelize");
const { QueryTypes } = require("sequelize");
class ApplicationController {
  //[POST]  jobs/create
  async Create(req, res) {
    try {
      const data = await Applications.findOne({
        where: {
          applicant_id: req.id,
          job_id: req.body.job_id,
        },
      });

      if (data) {
        if (data.is_deleted == 1) {
          Applications.update(
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
            message: "Bạn đã tái ứng tuyển công việc này !",
          });
        } else {
          res.json({
            message: "Bạn đã ứng tuyển công việc này !",
          });
        }
      } else {
        await Applications.create({
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
  async getAllJobApplication(req, res) {
    try {
      const jobs = await sequelize.query(
        `SELECT jobs.id, jobs.recruiter_id,jobs.title,jobs.description,jobs.type,jobs.salary,jobs.experience,jobs.location,jobs.state,jobs.category,jobs.category,jobs.starttime,jobs.deleted_at,jobs.extraskills,jobs.requireskills,jobs.befenit,jobs.is_deleted,jobs.createdAt,jobs.updatedAt FROM jobs JOIN applications ON jobs.id = applications.job_id WHERE applications.applicant_id=${req.id} AND applications.is_deleted=0`,
        { type: QueryTypes.SELECT }
      );
      res.json(jobs);
    } catch (error) {}
  }

  async cancelJobApplication(req, res) {
    try {
      await sequelize.query(
        `UPDATE applications SET applications.is_deleted=1 WHERE applications.applicant_id=${req.id} AND applications.job_id=${req.body.job_id}`
      );

      res.json({ message: "Bạn đã xóa công việc ra khỏi danh sách ứng tuyển" });
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  async getApplicantByJob(req, res) {
    try {
      const applicantList = await sequelize.query(
        `SELECT applicants.id,applicants.roleId,applicants.email,applicants.address,applicants.phone,applicants.experience,applicants.skills,applicants.education,applicants.resume,applicants.image,applicants.birthday,applicants.gender FROM applicants JOIN applications ON applicants.id = applications.applicant_id WHERE applications.job_id=${req.body.job_id} AND applications.is_deleted=0 `,
        { type: QueryTypes.SELECT }
      );

      res.json(applicantList);
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
}

module.exports = new ApplicationController();
