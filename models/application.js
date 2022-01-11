const Sequelize = require("sequelize");
const db = require("../config/db.sequelize");

const Application = db.define("application", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  job_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  applicant_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  deleted_at: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
  },
});

db.sync();

module.exports = Application;
