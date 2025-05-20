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