import lingxi from "./app/index";
import processEnv from "./config/config_default";

lingxi.listen(processEnv.APP_PORT, () => {
  console.log(`灵溪启动成功,请访问: http://localhost:${processEnv.APP_PORT}`);
});
