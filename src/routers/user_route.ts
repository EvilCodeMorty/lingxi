// 用户相关的路由;
import KoaRouter from "@koa/router";
const userRouter = new KoaRouter({ prefix: "/user" });

// 用户注册;
userRouter.post("/userRegister", async (ctx) => {
  ctx.body = "用户注册";
});

export default userRouter;
