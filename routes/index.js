//middle ware
const verifyToken = require("../middleware/verifyToken");
const { isAdmin, isApplicant, isRecruiter } = require("../middleware/authJWT");
const authRoute = require("./auth");
const jobRoute = require("./job");
const recruiterRoute = require("./recruiter");
const applicantRoute = require("./applicant");
const savedRoute = require("./saved");

function route(app) {
  app.use("/auth", authRoute);

  app.use("/jobs", verifyToken, isRecruiter, jobRoute);

  app.use("/recruiters", verifyToken, recruiterRoute);

  app.use("/applicants", verifyToken, applicantRoute);

  app.use("/saved", verifyToken, savedRoute);
  //app.use("/roles", verifyToken, isAdmin, roleRoute);
}
module.exports = route;
