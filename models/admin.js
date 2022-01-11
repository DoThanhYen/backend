const Sequelize = require("sequelize");
const db = require("../config/db.sequelize");

const Admin = db.define("admin", {
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
  username: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  password: {
    type: Sequelize.STRING(100),
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

module.exports = Admin;
