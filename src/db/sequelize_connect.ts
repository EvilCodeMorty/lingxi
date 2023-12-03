//数据库连接文件;
import { Sequelize } from "sequelize";
import processEnv from "../config/config_default";
// 创建连接;
const lingxiSequelizeConnect = new Sequelize(
  processEnv.MYSQL_DB!,
  processEnv.MYSQL_USER!,
  processEnv.MYSQL_PASSWORD,
  {
    host: processEnv.MYSQL_HOST,
    dialect: "mysql",
  }
);
// 数据库连接测试;
lingxiSequelizeConnect
  .authenticate()
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log("数据库连接失败", err);
  });
export default lingxiSequelizeConnect;
