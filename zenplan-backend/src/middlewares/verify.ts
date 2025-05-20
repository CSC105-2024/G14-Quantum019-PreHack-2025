import type { Context, Next } from "hono";
import jwt from "jsonwebtoken";
import type { Id } from "../types/types.ts";

const verify = async (c: Context, next: Next) => {
  const token = c.req.header("authorization");
  if (!token) throw new Error("Token is required");

  const bearerToken = token.split(" ")[1];

  if (!bearerToken) throw new Error("Bearer token is missing");

  try {
    
    const { id } = jwt.verify(
      bearerToken,
      process.env.JWT_SECRET!
    ) as { id: number };

    c.set("id", id);

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