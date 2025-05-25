import type { Context } from "hono";
import { toggle } from "./toggle.service.ts";

const toggleList = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  const user_id = c.get("user_id");

  try {
    const toggeled = await toggle({ id, user_id });

    return c.json(
      {
        success: true,
        data: toggeled,
        msg: `successful`,
      },
      200
    );
  } catch (error) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${(error as Error).message}`,
      },
      400
    );
  }
};

export { toggleList };
