import bcrypt from "bcrypt";

import * as userModel from "../models/user.model.ts";
import type { Hash } from "../types/types.ts";

// const generateHash = async (password: string) => {
//   const salt = await bcrypt.genSalt();
//   const newHash = await bcrypt.hash(password, salt);

//   return newHash;
// };

const compareHash = async (password: string, id: number) => {
  const { hash } = (await userModel.findPassword(id)) as Hash;
  const valid = await bcrypt.compare(password, hash);

  return valid;
};

export { compareHash };