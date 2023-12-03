import { Context } from "koa";
import UserModel from "../models/user_model";
class UserService {
  // 用户注册;
  public async userRegisterService(
    {
      user_name,
      user_password,
    }: {
      user_name: string;
      user_password: string;
    },
    ctx: Context
  ) {
    try {
      const result = await UserModel.create({
        user_name,
        user_password,
      });
      return result.dataValues;
    } catch (error) {}
  }
}
export default new UserService();
