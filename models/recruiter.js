const Sequelize = require("sequelize");
const db = require("../config/db.sequelize");

const Recruiter = db.define("recruiter", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  roleId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  company_name: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING(200),
    allowNull: false,
  },
  aboutus: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
  website: {
    type: Sequelize.STRING(500),
    allowNull: true,
  },
  location: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  amount_employee: {
    type: Sequelize.STRING(500),
    allowNull: false,
  },
  logo: {
    type: Sequelize.STRING(500),
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

module.exports = Recruiter;
