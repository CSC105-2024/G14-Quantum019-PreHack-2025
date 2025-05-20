import { db } from "../index.ts";
import type { IdPair, List } from "../types/types.ts";
import { Prisma } from "@prisma/client";

export const getLists = async (user_id: number) => {
  const lists = await db.list.findMany({
    where: { user_id: user_id },
  });

  return lists;
};

export const createList = async (list: List, user_id: number) => {
  try {
    const createdList = await db.list.create({
      data: {
        title: list.title,
        category: list.category,
        time: list.time,
        description: list.description,
        note: list.note,
        user_id: user_id,
      },
    });
    return createdList;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create list. Please check your input.");
  }
};

export const editList = async (list: List, pair: IdPair) => {
  try {
    const editedList = await db.list.upsert({
      where: { id: pair.id, user_id: pair.user_id },
      update: {
        title: list.title,
        category: list.category,
        time: list.time,
        description: list.description,
        note: list.note,
      },
      create: {
        title: list.title,
        category: list.category,
        time: list.time,
        description: list.description,
        note: list.note,
        user_id: pair.user_id,
      },
    });

    return editedList;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to edit list. Please check your input.");
  }
};

export const deleteList = async (pair: IdPair) => {
  const deletedList = await db.list.delete({
    where: { id: pair.id, user_id: pair.user_id },
  });

  return deletedList;
};

export const findList = async (pair: IdPair, trx: Prisma.TransactionClient) => {
  const list = await trx.list.findUnique({
    where: { id: pair.id, user_id: pair.user_id },
  });

  return list;
};

export const toggeledList = async (
  pair: IdPair,
  is_complete: boolean,
  trx: Prisma.TransactionClient
) => {
  const toggeledList = await trx.list.update({
    where: { id: pair.id, user_id: pair.user_id },
    data: {
      is_complete: {
        set: !is_complete,
      },
    },
  });

  return toggeledList;
};

export const completeLists = async (user_id: number) => {
  const lists = await db.list.updateMany({
    where: { is_complete: false, user_id: user_id },
    data: {
      is_complete: true,
    },
  });

  return lists;
};
