import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  createMessage,
  getAllMessageofAConversation,
  UpdateMessage,
} from "../controllers/messageControllers";

router.get("/:conversationid", authMiddleware, getAllMessageofAConversation);
router.post("/:id", authMiddleware, createMessage);

export default router;
