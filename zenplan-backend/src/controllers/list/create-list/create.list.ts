import type { Context } from "hono";
import type { List } from "../../../types/types.ts";
import * as ListModel from "../../../models/list.model.ts";

const createList = async (c: Context) => {
  const body: List = await c.req.json();
  const user_id = c.get("user_id");

  console.log(body);

  try {
    const list = await ListModel.createList(
      {
        ...body,
      },
      user_id
    );

    return c.json(
      {
        success: true,
        data: list,
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

export { createList };
