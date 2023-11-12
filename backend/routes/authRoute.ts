import express from "express";
const router = express.Router();
import {
  authMiddleware,
} from "../middleware/authentication";
import {
  RegisterUser,
  LoginUser,
} from "../controllers/authControllers";

router.post("/register", RegisterUser);
router.post("/login", LoginUser);

export default router;
