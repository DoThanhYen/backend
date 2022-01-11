const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const roles = require("../models/role");
const admin = require("../models/admin");
const applicants = require("../models/applicant");
const recruiters = require("../models/recruiter");

// const verifyToken = (req, res, next) => {
//   let token = req.headers["x-access-token"];

//   if (!token) {
//     return res.status(403).send({
//       message: "No token provided!",
//     });
//   }
//   jwt.verify(token, config.secrect, (err, decode) => {
//     if (err) {
//       return res.status(401).send({
//         message: "Unauthorized",
//       });
//     }
//     req.id = decode.id;
//     next();
//   });
// };

const isAdmin = (req, res, next) => {
  // users
  //   .findByPk(req.id)
  //   .then((user) => {
  //     return user.role_id;
  //   })
  //   .then((role_id) => {
  //     roles.findByPk(role_id).then((role) => {
  //       if (role.name === "admin") {
  //         next();
  //         return;
  //       } else {
  //         return res.status(403).send({ message: "Require Admin Role" });
  //       }
  //     });
  //   })
  //   .catch((err) => res.status(500).send({ message: err }));
  roles.findByPk(req.roleId).then((role) => {
    if (role.name === "admin") {
      next();
      return;
    } else {
      return res.status(403).send({ message: err });
    }
  });
};
const isRecruiter = (req, res, next) => {
  recruiters
    .findByPk(req.id)
    .then((user) => {
      return user.roleId;
    })
    .then((roleId) => {
      roles.findByPk(roleId).then((role) => {
        if (role.name === "recruiter") {
          next();
          return;
        } else {
          return res.status(403).send({ message: "Require Recruiter Role" });
        }
      });
    })
    .catch((err) => res.status(500).send({ message: err }));
};

const isApplicant = (req, res, next) => {
  // users
  //   .findByPk(req.id)
  //   .then((user) => {
  //     return user.role_id;
  //   })
  //   .then((role_id) => {
  //     roles.findByPk(role_id).then((role) => {
  //       if (role.name === "applicant") {
  //         next();
  //         return;
  //       } else {
  //         return res.status(403).send({ message: "Require Applicant Role" });
  //       }
  //     });
  //   })
  //   .catch((err) => res.status(500).send({ message: err }));
  if (role.name === "applicant") {
    next();
    return;
  } else {
    return res.status(403).send({ message: err });
  }
};

module.exports = { isAdmin, isRecruiter, isApplicant };
