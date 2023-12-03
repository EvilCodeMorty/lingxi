import { DataTypes } from "sequelize";
import lingxiSequelizeConnect from "../db/sequelize_connect";
const UserModel = lingxiSequelizeConnect.define(
  "lx_user",
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      comment: "用户名,唯一的",
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "用户密码",
    },
  },
  {
    // 添加时间戳属性 (updatedAt, createdAt)
    timestamps: true,
  }
);
// 创建数据表;
// UserModel.sync({ force: true });
export default UserModel;
