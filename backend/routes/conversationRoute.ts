import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  createConversation,
  getUserConversation,
  DeleteConversation,
} from "../controllers/conversationControllers";


router.get("/:id", authMiddleware, getUserConversation);
router.post("/", authMiddleware, createConversation);
router.delete("/:id", authMiddleware, DeleteConversation);

export default router;
