import type { Context } from "hono";
import * as ListModel from "../../../models/list.model.ts";
import { db } from "../../../index.ts";

const getLists = async (c: Context) => {
  const user_id = c.get("user_id");

  try {
    const lists = await ListModel.getLists(user_id, "def", db);

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
      500
    );
  }
};

export { getLists };
