const Sequelize = require("sequelize");
const db = require("../config/db.sequelize");

const Job = db.define("job", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  recruiter_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  salary: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  experience: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  state: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  starttime: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  deleted_at: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  extraskills: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  requireskills: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  befenit: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
  },
});

db.sync();

module.exports = Job;
