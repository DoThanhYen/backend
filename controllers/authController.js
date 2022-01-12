const config = require("../config/auth.config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const roles = require("../models/role");
const applicants = require("../models/applicant");
const recruiters = require("../models/recruiter");
const admin = require("../models/admin");
const jobs = require("../models/job");
class authController {
  //[POST] auth/signup/applicant
  async signupApplicant(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const roleId = req.body.roleId;
    const is_deleted = false;
    try {
      const Checkmail = await applicants.findAll({ where: { email: email } });
      if (Checkmail.length > 0) {
        res.status(400).send({
          message:
            "tài khoản email đã được đăng ký , vui lòng nhập tài khoản khác!",
        });
      }
      if (Checkmail.length === 0) {
        await applicants.create({
          password: bcrypt.hashSync(password, 8),
          email: email,
          roleId: roleId,
          is_deleted: is_deleted,
        });
        res.json({
          message:
            "Đăng ký tài khoản thành công , bạn có thể đăng nhập ngay bây giờ !",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  //[POST] auth/signup/recruiter
  async signupRecruiter(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const roleId = req.body.roleId;
    const company_name = req.body.company_name;
    const address = req.body.address;
    const username = req.body.username;
    const phone = req.body.phone;
    const amount_employee = req.body.amount_employee;
    const location = req.body.location;
    const is_deleted = false;
    try {
      const Checkmail = await recruiters.findAll({ where: { email: email } });
      if (Checkmail.length > 0) {
        res.status(400).send({
          message:
            "tài khoản email đã được đăng ký , vui lòng nhập tài khoản khác!",
        });
      }
      if (Checkmail.length === 0) {
        await recruiters.create({
          password: bcrypt.hashSync(password, 8),
          email: email,
          roleId: roleId,
          company_name: company_name,
          address: address,
          phone: phone,
          username: username,
          amount_employee: amount_employee,
          location: location,
          is_deleted: is_deleted,
        });
        res.json({
          message:
            "Đăng ký tài khoản thành công , bạn có thể đăng nhập ngay bây giờ !",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }
  //[POST] /auth/login/applicant
  async loginApplicant(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const user = await applicants.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res
          .status(404)
          .send({ message: "Email không tồn tại trong hệ thống" });
      }
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mật khẩu sai !",
        });
      }
      const token = jwt.sign({ id: user.id }, config.secrect, {
        expiresIn: 86400, // 24 hours
      });
      const role = await roles.findOne({ where: { id: user.roleId } });
      const role_name = role.name;
      req.role = role.name;
      res.status(200).send({
        id: user.id,
        email: user.email,
        role: role_name,
        accessToken: token,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  //[POST] /auth/login/recruiter
  async loginRecruiter(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    try {
      const user = await recruiters.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res
          .status(404)
          .send({ message: "Email không tồn tại trong hệ thống" });
      }
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mật khẩu sai !",
        });
      }
      const token = jwt.sign({ id: user.id }, config.secrect, {
        expiresIn: 86400, // 24 hours
      });
      const role = await roles.findOne({ where: { id: user.roleId } });
      const role_name = role.name;
      req.role = role.name;
      res.status(200).send({
        id: user.id,
        email: user.email,
        role: role_name,
        accessToken: token,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  //[POST] auth/signup/admin
  async signupAdmin(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const roleId = 1;
    const is_deleted = false;
    try {
      const Checkusername = await admin.findAll({
        where: { username: username },
      });
      if (Checkusername.length > 0) {
        res.status(400).send({
          message:
            " Tên đăng nhập đã được tồn tại, vui lòng nhập tài khoản khác!",
        });
      }
      if (Checkusername.length === 0) {
        await admin.create({
          password: bcrypt.hashSync(password, 8),
          username: username,
          roleId: roleId,
          is_deleted: is_deleted,
        });
        res.json({
          message:
            "Đăng ký tài khoản thành công , bạn có thể đăng nhập ngay bây giờ !",
        });
      }
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  //[POST] /auth/login/admin
  async loginAdmin(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    try {
      const user = await admin.findOne({
        where: {
          username: username,
        },
      });
      if (!user) {
        return res
          .status(404)
          .send({ message: "Tên đăng nhập không tồn tại trong hệ thống" });
      }
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mật khẩu sai !",
        });
      }
      const token = jwt.sign({ id: user.id }, config.secrect, {
        expiresIn: 86400, // 24 hours
      });
      const role = await roles.findOne({ where: { id: user.roleId } });
      const role_name = role.name;
      res.status(200).send({
        id: user.id,
        username: user.username,
        role: role_name,
        accessToken: token,
      });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  // [GET] /getalljobs
  async GetAllJobs(req, res, next) {
    try {
      const Jobs = await jobs.findAll();
      res.json(Jobs);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = new authController();
