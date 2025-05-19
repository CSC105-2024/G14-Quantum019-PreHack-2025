import type { Context } from "hono";
import type { List } from "../../../types/types.ts";
import * as ListModel from "../../../models/list.model.ts";

const createList = async (c: Context) => {
  const { title, category, time, description, note }: List = await c.req.json();

  //TODO:Temp
  const user_id = 1;

  try {
    const list = await ListModel.createList(
      {
        title,
        category,
        time,
        description,
        note,
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
