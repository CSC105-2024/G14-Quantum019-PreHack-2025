import type { Context, Next } from "hono";
import jwt from "jsonwebtoken";
import type { Id } from "../types/types.ts";
import { getSignedCookie } from "hono/cookie";
import { findInfo } from "../models/user.model.ts";

const verify = async (c: Context, next: Next) => {
    try {
    const cookie = await getSignedCookie(
      c,
      process.env.COOKIE_SECRET_KEY!,
      "jwt"
    );

    if (typeof cookie !== "string") throw new Error("Invalid or missing token");

    const { id } = jwt.verify(
      cookie,
      process.env.JWT_SECRET!
    ) as Id;

    const info = await findInfo(id);

    if (!info) throw new Error("User not found");

    c.set("user_id", id);
    await next();
  } catch (error) {
    console.error(error);
    return c.json(
      {
        success: false,
        data: null,
        msg: `Access token is not authorized`,
      },
      401
    );
  }
};

export { verify };