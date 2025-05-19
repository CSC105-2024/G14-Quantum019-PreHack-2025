import type { Context } from "hono"
import * as userModel from "../../../models/user.model.ts"
import { generateToken } from "../../../utils/token.ts"

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

        const user = await userModel.registerUser(name, email, password)
        const token = generateToken(user);

        return c.json({ success: true, token }, 201)
    } catch (error) {
        console.error(error)
        return c.json({ success: false, msg: 'Failed to create user' }, 500)
    }
}