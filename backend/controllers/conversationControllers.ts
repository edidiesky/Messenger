import asyncHandler from "express-async-handler";
import { NextFunction, Request as ExpressRequest, Response, Request } from "express";
import prisma from "../prisma";
interface CustomInterface extends ExpressRequest {
  user?: {
    userId?: String;
    // Add other properties related to the user if needed
  };
}

// POST
// Create prisma. 
//  Public
const createConversation = asyncHandler(async (req: CustomInterface, res: Response, next: NextFunction) => {

  try {
    // get the body parameter
    const currentUserId = req.user?.userId
    const { members, isGroup, lastMessage, userId } = req.body
    // check if a group convo is needed
    if (isGroup) {
      const groupConvoData = {
        isGroup,
        users: {
          connect: [
            {
              ...members.map((member?: { value: string }) => {
                return { id: member?.value }
              })
            },
            {
              id: currentUserId
            }
          ]
        }
      }

      const groupConvoOutcome = await prisma.conversations.create({
        include: {
          users: true
        },

        data: groupConvoData
      })

      res.setHeader("Content-Type", "text/html");
      res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

      res.status(200).json({ conversation: groupConvoOutcome })
    }
    // check for exisitng convo
    const existingConversation = await prisma.conversations.findMany({
      where: {
        OR: [
          {
            userIds: {
              equals: [userId, currentUserId]
            }
          },
          {
            userIds: {
              equals: [currentUserId, userId]
            }
          },
        ]
      }
    })

    // send if it exists
    if (existingConversation[0]) {
      res.setHeader("Content-Type", "text/html");
      res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

      res.status(200).json({ conversation: existingConversation[0] })
    }
    // else create new one

    const conversationdata = {
      lastMessage,
      isGroup,
      users: {
        connect: [
          // sender ids tc come first since he is the one sending it
          {
            id: currentUserId
          },
          {
            id: userId
          },

        ]
      },

    }

    const newConversation = await prisma.conversations.create({
      data: conversationdata,
      include: {
        users: true,
      }
    })
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

    res.status(200).json({ conversation: newConversation })

  } catch (error: any) {
    res.status(401).json({ message: error?.data })
  }




});

// GET Review of the user conversation
//  Public
// send the conversation Id only
const getUserConversation = asyncHandler(async (req: CustomInterface, res: Response) => {
  // get the conversation id form the req params
  const userId = req.params.id
  const currentUserId = req.user?.userId as any
  //  find a unique document containiung the convo id
  const conversation = await prisma.conversations.findMany({
    where: {
      OR: [
        {
          userIds: {
            equals: [userId, currentUserId]
          }
        },
        {
          userIds: {
            equals: [currentUserId, userId]
          }
        },
      ]
    }
  })

  if (conversation[0]) {
    res.status(200).json({ conversation: conversation[0] })

  } else {
    res.status(200).json({ conversation: null })
  }


});

// GET All Gig
//  Public
const DeleteConversation = asyncHandler(async (req: CustomInterface, res: Response) => {


  // get the request body
  const curentUserId = req?.user?.userId as string

  const conversation = await prisma.conversations.findUnique({
    where: {
      id: req.params.id
    },
    include: {
      users: true
    }
  })
  if (!conversation) {
    res.status(404);
    throw new Error("No such conversation exists");
  }

  await prisma.conversations.deleteMany({
    where: {
      id: req.params.id,
      userIds: {
        hasSome: [curentUserId]
      }
    },
  })
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  res.status(200).json({ message: 'Conversation has been successfully deleted' })
});


export {
  createConversation,
  getUserConversation,
  DeleteConversation,
};
