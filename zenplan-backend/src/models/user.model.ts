import { compare, hash } from "bcrypt"
import bcrypt from "bcrypt"
import { db } from "../index.ts"

const registerUser = async (
    name: string, 
    email: string,
    password: string 
) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await db.user.create({
        data: { name: name,
                email: email, 
        },
    })
    
    await db.password.create({
        data: {
            hash: hashedPassword,
            user_id: user.id,
        }
    })
    return user;
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

export { registerUser, findPassword, findUserByEmail }