import type { Context } from "hono"
import * as userModel from "../../../models/user.model.ts"
import { generateToken } from "../../../utils/token.ts"
import { generateHash } from "../../../utils/hash.ts"
import { register } from "./register.service.ts"
import jwt from "jsonwebtoken"
import type { createUser } from "../../../types/types.ts"

const registerUser = async (c: Context) => {
    try {
        const { name, email, password } = await c.req.json<createUser>()

        const existing = await userModel.findInfo(email)
        if (existing) {
            return c.json({ success: false, msg: 'Email already exists' }, 409)
        }

        const hash = await generateHash(password);

        const user = await register(name, email, hash);

        return c.json({ success: true, msg: "Registered successfully" }, 201)
    } catch (error) {
        console.error(error)
        return c.json({ success: false, msg: 'Failed to create user' }, 500)
    }
}

export { registerUser }