import { Router } from "express";
import {
  getItems,
  addItem,
  editItem,
  removeItem,
} from "../controllers/item.controller";

const router = Router();

router.get("/", getItems);

router.post("/", addItem);

router.put("/:id", editItem);

router.delete("/:id", removeItem);

export default router;
