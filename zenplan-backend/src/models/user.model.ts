import { compare, hash } from "bcrypt"
import bcrypt from "bcrypt"
import { db } from "../index.ts"

const registerUser = async (
    name: string, 
    email: string,
    trx: any,
) => {
    //const salt = await bcrypt.genSalt();
    //const hashedPassword = await bcrypt.hash(password, salt);
    const user = await trx.user.create({
        data: { name: name,
                email: email, 
        },
    })

    return user;
}

const registerPassword = async (user_id: number, hash: string, trx: any) => {
    const password = await trx.password.create({
        data: {
            user_id: user_id,
            hash: hash,
        }
    })
}

const findPassword = async (user_id: number) => {
    const hash = await db.password.findUnique({
        where: {user_id: user_id},
    })
    return hash;
}

const findUserByEmail = async (email: string) => {
    return db.user.findUnique({ where: { email }})
}

export { registerUser, registerPassword, findPassword, findUserByEmail }