import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response } from "express";
import prisma from "../prisma";

interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}


// Create Message
//  Public
const createMessage = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the body message
  const conversationId = req.params.id
  // console.log(conversationId)
  const senderId = req.user?.userId as string
  const { body, image, lastMessage } = req.body
   // create the message

  const message = await prisma.message.create({
    data: {
      body,
      image,
      seen: {
        connect: {
          id: senderId
        }
      },
      sender: {
        connect:
          { id: senderId }

      },
      conversation: {
        connect: {
          id: conversationId
        }
      }
    },
    include: {
      sender: true,
      seen: true
    }
  })
  //  update the conversation
  const newConversation = await prisma.conversations.update({
    where: {
      id: conversationId,
    },
    data: {
      lastMessageAt: new Date(),
      lastMessage
    },
    include: {
      users: true,
    }
  })


  //  send the message

  res.status(200).json({ message })

})

// GET
// GET All Message
//  Public
const getAllMessageofAConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  
  // get the conversation id form the req params
  const conversatonId = req.params.conversationid
  // console.log(conversatonId)
  //  find a unique document containiung the convo id
  const messages = await prisma.message.findMany({
    where: {
      conversationId: conversatonId
    },
    include:{
      seen:true,
      sender:true
    },
    orderBy:{
      createdAt:"asc"
    }
  })

  res.status(200).json({ messages })
});


// GET All Message
//  Public
const DeleteMessage = asyncHandler(async (req: CustomInterface, res: Response) => {

});

const UpdateMessage = asyncHandler(async (req: CustomInterface, res: Response) => {

});

export {
  createMessage,
  DeleteMessage,
  getAllMessageofAConversation,
  UpdateMessage,
};
