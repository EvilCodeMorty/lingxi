// 用户相关的路由;
import KoaRouter from "@koa/router";
import UserController from "../controllers/user_controller";
import { verifyUserRegistrationParameters } from "../middlewares/parameter_middleware";
const userRouter = new KoaRouter({ prefix: "/user" });

// 用户注册;
userRouter.post(
  "/userRegister",
  verifyUserRegistrationParameters,
  UserController.userRegisterController
);

export default userRouter;
