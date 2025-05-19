import type { Context } from "hono";
import * as ListModel from "../../../models/list.model.ts";

const getLists = async (c: Context) => {
  //TODO:Temp
  const user_id = 1;

  try {
    const lists = await ListModel.getLists(user_id);

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
