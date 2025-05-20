import { db } from "../../../index.ts";
import type { IdPair } from "../../../types/types.ts";
import * as ListModel from "../../../models/list.model.ts";

const toggle = async (pair: IdPair) => {
  const list = await db.$transaction(async (trx) => {
    try {
      const listInfo = await ListModel.findList(pair, trx);

      const toggled = await ListModel.toggeledList(
        pair,
        listInfo.is_complete,
        trx
      );
      return toggled;
    } catch (error) {
      console.log(error);
      throw new Error(
        "Failed to toggle the list status. Please try again later."
      );
    }
  });
  return list;
};

export { toggle };
