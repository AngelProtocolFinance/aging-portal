import { app } from "constants/config";
import jwt, { JwtPayload } from "jsonwebtoken";

export const createAuthToken = () => {
  const payload: JwtPayload = {
    authorization: "allow",
    user: app.id,
  };
  return jwt.sign(payload, process.env.REACT_APP_JWT_SECRET_KEY!, {
    expiresIn: 30,
  });
};
