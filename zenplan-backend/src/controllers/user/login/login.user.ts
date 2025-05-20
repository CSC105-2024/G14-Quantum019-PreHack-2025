import type { Context } from "hono";
import * as userModel from "../../../models/user.model.ts"
import type { Login } from "../../../types/types.ts";
import { compareHash } from "../../../utils/hash.ts";
import { generateToken } from "../../../utils/token.ts";
import dotenv from "dotenv";
import { setSignedCookie } from "hono/cookie";

dotenv.config();

const loginUser = async (c: Context) => {
    try {
        const {email, password}: Login = await c.req.json();

        const info = await userModel.findInfo(email);
        if(!info) {
            return c.json({ success: false, msg: 'Invalid email' }, 401)
        }

        const isValid = await compareHash(password, info.id);
        if (!isValid) {
        return c.json({ success: false, msg: 'Invalid password' }, 401)
        }

        const token = generateToken(info)

        await setSignedCookie(
            c,
            "jwt",
            token,
            process.env.COOKIE_SECRET_KEY!,
            {
                secure: false,
                httpOnly: true,
                maxAge: 700000,
            }
        )
        const { name, email: userEmail } = info;
        const data = { name, userEmail, token }
        
        return c.json(
            {
                success: true,
                data: data,
                msg: `Log in Successful`,
            },
            200
        );
    } catch (error) {
        console.error(error)
        return c.json({ success: false, msg: 'Failed to log in' }, 500)
    }

}

export { loginUser }