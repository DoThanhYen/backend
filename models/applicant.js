const Sequelize = require("sequelize");
const db = require("../config/db.sequelize");

const Applicant = db.define("applicant", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  roleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING(20),
    allowNull: true,
  },
  experience: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
  skills: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
  education: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  resume: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
  image: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
  birthday: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  gender: {
    type: Sequelize.STRING(10),
    allowNull: true,
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

module.exports = Applicant;
