import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  DeleteUser,
  UpdateUser,
  GetAllUser,
  GetUserSearch,
  CheckCookie,
  GetSingleUser
} from "../controllers/userControllers";

router.get("/", authMiddleware, GetAllUser);
router.get("/search", authMiddleware, GetUserSearch);
router.post("/check-cookie", authMiddleware, CheckCookie);

router.route('/:id').get(authMiddleware, GetSingleUser).put(authMiddleware, UpdateUser).delete(authMiddleware, DeleteUser)

export default router;
