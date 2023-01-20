import Express from "express";

const router = Express.Router();

import {
  createUsers,
  deleteUsers,
  getUsers,
  getUserById,
  updateUsers,
} from "../controllers/users.controller";

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/create", createUsers);
router.put("/:userId", updateUsers);
router.delete("/:userId", deleteUsers);

export default router;
