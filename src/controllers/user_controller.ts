//
import { Context, Next } from "koa";
import userService from "../services/user_service";
class UserController {
  // 用户注册;
  public async userRegisterController(ctx: Context, next: Next) {
    try {
      const { user_name, user_password } = ctx.request.body;
      const result = await userService.userRegisterService(
        {
          user_name,
          user_password,
        },
        ctx
      );
      if (result) {
        ctx.body = {
          code: 0,
          message: "注册成功",
          result: {
            user_name,
          },
        };
      } else {
        ctx.body = {
          code: 400,
          message: "注册失败",
        };
      }
    } catch (error) {}
  }
  public async userLoginController(ctx: Context, next: Next) {
    try {
    } catch (error) {}
  }
}
export default new UserController();
