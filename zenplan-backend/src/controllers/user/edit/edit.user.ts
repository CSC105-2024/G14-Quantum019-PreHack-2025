import type { Context } from "hono";
import * as userModel from "../../../models/user.model.ts";
import { compareHash, generateHash } from "../../../utils/hash.ts";
import { deleteCookie } from "hono/cookie";

const editInfo = async (c: Context) => {
  const user_id = c.get("user_id");
  const body = await c.req.json();

  try {
    const info = await userModel.editInfo(body, user_id);
    console.log(body);

    return c.json(
      {
        success: true,
        data: info,
        msg: `Successful`,
      },
      200
    );
  } catch (error) {
    console.error(error);
    return c.json({ success: false, msg: "Failed to edit info" }, 500);
  }
};

const editPassword = async (c: Context) => {
  const body = await c.req.json();
  const user_id = c.get("user_id");

  try {
    const valid = await compareHash(body.password, user_id);

    if (!valid) throw new Error("Password is incorrect!!!");

    const newHash = await generateHash(body.newPassword);

    await userModel.updatePassword(newHash, user_id);

    deleteCookie(c, "jwt");

    return c.json(
      {
        success: true,
        data: null,
        msg: `Successful`,
      },
      200
    );
  } catch (error) {
    console.error(error);
    return c.json({ success: false, msg: `${(error as Error).message}` }, 500);
  }
};

export { editInfo, editPassword };
