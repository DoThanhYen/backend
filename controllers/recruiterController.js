const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const recruiters = require("../models/recruiter");
class RecruiterController {
  //[POST]  recruiter/update
  async Update(req, res) {
    try {
      await recruiters.update(
        {
          company_name: req.body.company_name,
          name: req.body.name,
          address: req.body.address,
          phone: req.body.phone,
          username: req.body.username,
          aboutus: req.body.aboutus,
          website: req.body.website,
          location: req.body.location,
          amount_employee: req.body.amount_employee,
          logo: req.body.logo,
          gender: req.body.gender,
          is_deleted: false,
        },
        {
          where: { id: req.id },
        }
      );
      res.json({
        message: "Cập nhật tài khoản thành công!",
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = new RecruiterController();
