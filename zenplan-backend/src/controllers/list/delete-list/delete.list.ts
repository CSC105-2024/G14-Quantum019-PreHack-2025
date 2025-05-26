import type { Context } from "hono";
import * as ListModel from "../../../models/list.model.ts";

const deletList = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  const user_id = c.get("user_id");

  try {
    const deletedList = await ListModel.deleteList({ id, user_id });

    return c.json(
      {
        success: true,
        data: deletedList,
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
      404
    );
  }
};

export { deletList };
