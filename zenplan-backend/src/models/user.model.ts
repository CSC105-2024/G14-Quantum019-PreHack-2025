import { db } from "../index.ts";

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

export { registerUser, registerPassword, findPassword, findInfo };
