import { db } from "../../../index.ts";
import * as ListModel from "../../../models/list.model.ts";

const completeAll = async (user_id: number) => {
  const lists = await db.$transaction(async (trx) => {
    try {
      await ListModel.completeLists(user_id);

      const completeLists = await ListModel.getLists(user_id, "trx", trx);

      return completeLists;
    } catch (error) {
      console.log(error);
      throw new Error(
        "Failed to mark all lists as complete. Please try again later."
      );
    }
  });
  return lists;
};

export { completeAll };
