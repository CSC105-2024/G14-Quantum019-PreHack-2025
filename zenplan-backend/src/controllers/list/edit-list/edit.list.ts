import type { Context } from "hono";
import type { List } from "../../../types/types.ts";
import * as ListModel from "../../../models/list.model.ts";

const editList = async (c: Context) => {
  const id = parseInt(c.req.param("id"));
  const user_id = c.get("user_id");

  const body: List = await c.req.json();

  try {
    const editedList = await ListModel.editList(
      {
        ...body,
      },
      {
        id,
        user_id,
      }
    );
    return c.json(
      {
        success: true,
        data: editedList,
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

export { editList };
