// import bcrypt from "bcryptjs";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import prisma from "../prisma";
// GET All prisma.user
//  Public
const RegisterUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, hashedPassword, } = req.body;
  //
  if (!email || !hashedPassword || !name) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // check if the user exist
  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  if (userExist) {
    res.status(404);
    throw new Error("The user does exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(req.body.hashedPassword, salt);
  const Tempuser = {
    email,
    hashedPassword: hashedpassword,
    name,
  };
  const user = await prisma.user.create({
    data: Tempuser,
  })
  // let formatedUser = user as any
  // formatedUser = {user?.hashedPassword, user?.name}

  const jwtcode: Secret = 'hello'
  const token = jwt.sign(
    {
      userId: user?.id,

    },
    jwtcode,
    { expiresIn: "12d" }
  );

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  //  await delete user?.hashedPassword
  res.cookie('accessToken', token, {
    httpOnly: true,

    expires: new Date(Date.now() + 60 * 60 * 24 * 1000),

  })
  res.status(200).json({ user, token });


});

const LoginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, hashedPassword } = req.body;
  if (!email || !hashedPassword) {
    res.status(404);
    throw new Error("Please fill in the valid credentails");
  }
  // Find the user in the database

  const userExist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  if (!userExist) {
    res.status(404);
    throw new Error("You do not have any record with us!!!");
  }
  const verifyPassword = await bcrypt.compare(hashedPassword!, userExist.hashedPassword!);
  if (!verifyPassword) {
    res.status(404);
    throw new Error("Please provide a valid hashedPassword");
  }
  const jwtcode: Secret = 'hello'
  //
  const token = jwt.sign(
    {
      userId: userExist.id,
    },
    jwtcode,
    { expiresIn: "12d" }
  );

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.cookie('accessToken', token, {
    httpOnly: true,

    expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    domain: 'localhost', // or your specific domain
    path: '/', // root path
    secure: false, // if your site uses HTTPS

    // withcredential: true
  })
  res.status(200).json({ user: userExist, token});

});





export {
  RegisterUser,
  LoginUser,
};
