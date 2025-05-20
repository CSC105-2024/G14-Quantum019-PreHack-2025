import type { Context } from "hono";
import * as ListModel from "../../../models/list.model.ts";

const completeLists = async (c: Context) => {
  const user_id = 1; //TODO: temp

  try {
    const lists = await ListModel.completeLists(user_id);

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
