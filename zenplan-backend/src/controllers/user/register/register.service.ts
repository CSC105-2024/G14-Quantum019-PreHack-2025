import { db } from "../../../index.ts";
import * as userModel from "../../../models/user.model.ts"

const register = async (
    name: string,
    email: string,
    hash: string
) => {
    const info = await db.$transaction(async (trx) => {
        const user = await userModel.registerUser(name, email, trx);
        await userModel.registerPassword(user.id, hash, trx);
        return user;
    }
    )
    return info;
}

export { register }