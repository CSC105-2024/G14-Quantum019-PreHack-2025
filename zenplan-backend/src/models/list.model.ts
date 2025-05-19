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
  const createdList = await db.list.create({
    data: {
      title: list.title,
      category: list.category,
      time: list.category,
      description: list.description,
      note: list.note,
      user_id: user_id,
    },
  });

  return createdList;
};

export const editList = async (list: List, pair: IdPair) => {
  const editedList = await db.list.update({
    where: { id: pair.id, user_id: pair.user_id },
    data: {
      title: list.title,
      category: list.category,
      time: list.category,
      description: list.description,
      note: list.note,
    },
  });

  return editedList;
};

export const deleteList = async (pair: IdPair) => {
  const deletedList = await db.list.delete({
    where: { id: pair.id, user_id: pair.user_id },
  });

  return deletedList;
};

export const findList = async (pair: IdPair, db: Prisma.TransactionClient) => {
  const list = await db.list.findUnique({
    where: { id: pair.id, user_id: pair.user_id },
  });

  return list;
};

export const comepleteList = async (
  pair: IdPair,
  is_complete: boolean,
  db: Prisma.TransactionClient
) => {
  const toggeledList = await db.list.update({
    where: { id: pair.id, user_id: pair.user_id },
    data: {
      is_complete: {
        set: !is_complete,
      },
    },
  });

  return toggeledList;
};
