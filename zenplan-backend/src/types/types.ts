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
