// import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { Request as ExpressRequest, Response } from "express";
import prisma from "../prisma";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

// GET All prisma
const GetAllUser = asyncHandler(async (req: CustomInterface, res: Response) => {
  const queryObject = {}
  const name: any = req.query.name as any
  const id: any = req.query.id as any

  const user = await prisma.user.findMany({
    where: {
      name: { contains: name, mode: "insensitive" },
      NOT: { id: id }
    }
  });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ user });

});

const CheckCookie = asyncHandler(async (req: CustomInterface, res: Response) => {

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ user: req.user });

});

const GetSingleUser = asyncHandler(async (req: CustomInterface, res: Response) => {


  const user = await prisma.user.findUnique({ where: { id: req.params.id } });
  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ user });

});



const GetUserSearch = asyncHandler(async (req: CustomInterface, res: Response) => {

});

//PRIVATE
const UpdateUser = asyncHandler(async (req: ExpressRequest, res: Response) => {

  // const user = await prisma.user.findUnique({ where: { id: req.params.id } });

  // if (!user) {
  //   res.status(404);
  //   throw new Error("The user does not exist");
  // }
  const updatedUser = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  })

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ updatedUser });
});


//PRIVATE/
const DeleteUser = asyncHandler(async (req: ExpressRequest, res: Response) => {

  const user = await prisma.user.findUnique({ where: { id: req.params.id } });

  if (!user) {
    res.status(404);
    throw new Error("The user does not exist");
  }

  const deleteUsers = await prisma.user.delete({
    where: {
      id: req.params.id 
    },
  })

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.status(200).json({ message: "Your account has been successfully deactivated" });
})


export {
  DeleteUser,
  UpdateUser,
  GetAllUser,
  GetUserSearch,
  CheckCookie,
  GetSingleUser
};
