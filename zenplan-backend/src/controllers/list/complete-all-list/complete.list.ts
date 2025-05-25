import type { Context } from "hono";
import { completeAll } from "./complete.service.ts";

const completeLists = async (c: Context) => {
  const user_id = c.get("user_id");

  try {
    const lists = await completeAll(user_id);

    return c.json(
      {
        success: true,
        data: lists,
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

export { completeLists };
