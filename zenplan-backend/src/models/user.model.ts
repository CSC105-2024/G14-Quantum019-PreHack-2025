import { db } from "../index.ts";
import type { EditInfo } from "../types/types.ts";

const registerUser = async (name: string, email: string, trx: any) => {
  const user = await trx.user.create({
    data: { name: name, email: email },
  });

  return user;
};

const registerPassword = async (user_id: number, hash: string, trx: any) => {
  const password = await trx.password.create({
    data: {
      user_id: user_id,
      hash: hash,
    },
  });
};

const findPassword = async (user_id: number) => {
  const hash = await db.password.findUnique({
    where: { user_id: user_id },
  });
  return hash;
};

const findInfo = async (identifier: string | number) => {
  const user = await db.user.findUnique({
    where:
      typeof identifier === "string"
        ? { email: identifier }
        : { id: identifier },
  });

  return user;
};

const editInfo = async (info: EditInfo, user_id: number) => {
  const user = await db.user.update({
    where: { id: user_id },
    data: {
      name: info.name,
      email: info.email,
    },
  });

  return user;
};

const updatePassword = async (hash: string, user_id: number) => {
  await db.password.update({
    where: { id: user_id },
    data: {
      hash: hash,
    },
  });
};

export {
  registerUser,
  registerPassword,
  findPassword,
  findInfo,
  editInfo,
  updatePassword,
};
