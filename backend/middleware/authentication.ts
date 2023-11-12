import bcrypt from "bcryptjs";
import jwt, {Secret, JwtPayload} from "jsonwebtoken";
import { NextFunction, Request as ExpressRequest, Response } from "express";

interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: string;
    // Add other properties related to the user if needed
  };
}

// const authMiddleware = ( req: CustomInterface, res: Response, next: NextFunction) => {
//   //check for the token
//   const authToken = req.cookies.accessToken;

//   if (!authToken) {
//     res
//       .status(403)
//       .json({
//         messsage: "Please provide the token. No token has been provided",
//       });
//   }
  

//   // Verify the token being gotten from the header
//   const jwtCode:Secret = 'hello'
//   try {
//     const { userId }: JwtPayload = jwt.verify(authToken, jwtCode) as JwtPayload
//     if (!userId) {
//       res.status(403).json({ messsage: "Please provide a valid token" });
//     }

//     // const { userId, } = Verifiedtoken

//     req.user = { userId };
//     next();
//   } catch (err) {
//     res.status(403).json({ messsage: "Not authorized to access this route" });
//   }
// };

const authMiddleware = ( req: CustomInterface, res: Response, next: NextFunction) => {
  //check for the token
  const authenticationheader = req.headers.authorization;

  if (!authenticationheader || !authenticationheader.startsWith("Bearer ")) {
    res
      .status(403)
      .json({
        messsage: "Please provide the token. No token has been provided",
      });
  }
  if (!authenticationheader) {
    // Handle the case when the authorization header is missing
    res.status(401).json({ message: 'Authorization header is missing' });
    return;
  }
  
  const token = authenticationheader.split(" ")[1];

  // Verify the token being gotten from the header
  const jwtCode:Secret = 'hello'
  try {
    const { userId }: JwtPayload = jwt.verify(token, jwtCode) as JwtPayload
    if (!userId) {
      res.status(403).json({ messsage: "Please provide a valid token" });
    }

    // const { userId, } = Verifiedtoken

    req.user = { userId };
    next();
  } catch (err) {
    res.status(403).json({ messsage: "Not authorized to access this route" });
  }
};

export {  authMiddleware };
