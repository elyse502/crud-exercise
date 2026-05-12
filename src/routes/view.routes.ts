import { Router } from "express";
import {
  createItemFromForm,
  deleteItemFromForm,
  renderCreatePage,
  renderEditPage,
  renderHomePage,
  updateItemFromForm,
} from "../controllers/view.controller";

const router = Router();

router.get("/", renderHomePage);
router.get("/create", renderCreatePage);
router.post("/create", createItemFromForm);
router.get("/edit/:id", renderEditPage);
router.put("/edit/:id", updateItemFromForm);
router.delete("/delete/:id", deleteItemFromForm);

export default router;
