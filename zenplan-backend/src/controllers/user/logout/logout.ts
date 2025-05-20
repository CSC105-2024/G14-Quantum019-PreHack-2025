import type { Context } from "hono";
import { deleteCookie } from "hono/cookie";

const logout = async (c: Context) => {
  deleteCookie(c, "jwt");
  return c.json(
    {
      success: true,
      data: "cookie removed",
      msg: `successful`,
    },
    201
  );
};

export { logout };