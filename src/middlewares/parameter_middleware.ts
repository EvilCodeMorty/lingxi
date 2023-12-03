import { Context, Next } from "koa";
export const verifyUserRegistrationParameters = async (
  ctx: Context,
  next: Next
) => {
  try {
    // 获取用户请求参数;
    const { user_name, user_password } = ctx.request.body;
    // 校验用户参数是否完整;
    if (!user_name) {
      ctx.body = {
        code: 400,
        message: "用户名不能为空",
      };
      return;
    }
    if (!user_password) {
      ctx.body = {
        code: 400,
        message: "密码不能为空",
      };
      return;
    }
    // 校验用户参数是否符合正则;
    // 用户名由大写或小写字母、数字组成 长度为6- 16位;
    const user_name_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;
    // 密码由大小写字母、数字, 符号, 组成, 长度为6 - 16位;
    const user_password_reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/;
    if (!user_name_reg.test(user_name)) {
      ctx.body = {
        code: 400,
        message: "用户名格式不正确",
      };
      return;
    }
    if (!user_password_reg.test(user_password)) {
      ctx.body = {
        code: 400,
        message: "密码格式不正确",
      };
      return;
    }
    // 校验用户是否已存在;
    await next();
  } catch (error) {}
};
