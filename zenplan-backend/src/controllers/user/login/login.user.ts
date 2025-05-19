import type { Context } from "hono";
import * as userModel from "../../../models/user.model.ts"
import type { Login } from "../../../types/types.ts";
import { compareHash } from "../../../utils/hash.ts";
import { generateToken } from "../../../utils/token.ts";

const login = async (c: Context) => {
    try {
        const {email, password}: Login = await c.req.json();

        const user = await userModel.findUserByEmail(email);
        if(!user) {
            return c.json({ success: false, msg: 'Invalid email' }, 401)
        }

        const isValid = await compareHash(password, user.id);
        if (!isValid) {
        return c.json({ success: false, msg: 'Invalid passwords' }, 401)
        }

        const token = generateToken(user)
        return c.json({ success: true, token})
    } catch (error) {
        console.error(error)
        return c.json({ success: false, msg: 'Failed to log in' }, 500)
    }

}