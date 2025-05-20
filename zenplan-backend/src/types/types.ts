type Hash = {
    hash: string;
}

type Login = {
    email: string;
    password: string;
}

type Id = {
  id: number;
};

type createUser = {
    name: string,
    email: string,
    password: string,
}

export type { Hash, Login, Id, createUser }
import type { $Enums } from "../generated/prisma/client.js";

type List = {
  title: string;
  category: $Enums.Category;
  time: Date;
  description: string;
  note: string;
};

type IdPair = {
  id: number;
  user_id: number;
};

export type { List, IdPair };
