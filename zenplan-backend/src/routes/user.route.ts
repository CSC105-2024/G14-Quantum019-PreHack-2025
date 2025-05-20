import { Hono } from "hono";
import { registerUser } from "../controllers/user/register/register.user.ts";
import { loginUser } from "../controllers/user/login/login.user.ts";
import { logout } from "../controllers/user/logout/logout.ts";

const userRouter = new Hono();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logout);

export { userRouter };
