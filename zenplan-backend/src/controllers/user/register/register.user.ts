import type { Context } from "hono"
import * as userModel from "../../../models/user.model.ts"
import { generateToken } from "../../../utils/token.ts"
import { generateHash } from "../../../utils/hash.ts"
import { register } from "./register.service.ts"

type createUser = {
    name: string,
    email: string,
    password: string,
}

const registerUser = async (c: Context) => {
    try {
        const { name, email, password } = await c.req.json<createUser>()

        const existing = await userModel.findUserByEmail(email)
        if (existing) {
            return c.json({ success: false, msg: 'Email already exists' }, 409)
        }

        const hash = await generateHash(password);

        const user = await register(name, email, hash);
        const token = generateToken(user);

        return c.json({ success: true, token }, 201)
    } catch (error) {
        console.error(error)
        return c.json({ success: false, msg: 'Failed to create user' }, 500)
    }
}