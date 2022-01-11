require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_name || "tuyendung",
  process.env.USER || "root",
  process.env.PASSWORD || "",
  {
    host: process.env.HOST || "localhost",
    dialect: process.env.dialect || "mysql",
    operatorsAliases: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
connectDB();
//module.exports = { connectDB };
module.exports = sequelize;
