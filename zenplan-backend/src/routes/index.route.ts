import { Hono } from "hono";

import { listRouter } from "./list.route.ts";
import { userRouter } from "./user.route.ts";

const mainRouter = new Hono();

mainRouter.route("/user", userRouter);
mainRouter.route("/list", listRouter);

export { mainRouter };
