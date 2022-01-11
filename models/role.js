const Sequelize = require("sequelize");
const db = require("../config/db.sequelize");

const Role = db.define("role", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  deleted_at: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
  },
});

db.sync();

module.exports = Role;
