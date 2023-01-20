import Express from "express";
import {
  createProducts,
  deleteProducts,
  getProducts,
  getProductById,
  updateProducts,
} from "../controllers/products.controller";

import {verifyToken} from "../middlewares/verifyToken"

const router = Express.Router();

router.get("/", getProducts);
router.get("/:productId", getProductById);
router.post("/create", verifyToken,createProducts);
router.put("/:productId", verifyToken,updateProducts);
router.delete("/:productId", verifyToken,deleteProducts);

export default router;
