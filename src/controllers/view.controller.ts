import { Request, Response } from "express";
import {
  createItem,
  deleteItem,
  getAllItems,
  updateItem,
} from "../services/item.service";

export const renderHomePage = async (
  _req: Request,
  res: Response,
): Promise<void> => {
  const items = await getAllItems();

  res.render("index", { items });
};

export const renderCreatePage = (_req: Request, res: Response): void => {
  res.render("create");
};

export const createItemFromForm = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name, price } = req.body;

  await createItem({
    name,
    price: Number(price),
  });

  res.redirect("/");
};

export const renderEditPage = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const items = await getAllItems();
  const itemId = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  if (!itemId) {
    res.status(400).send("Invalid item id");
    return;
  }

  const item = items.find((currentItem) => currentItem.id === itemId);

  if (!item) {
    res.status(404).send("Item not found");
    return;
  }

  res.render("edit", { item });
};

export const updateItemFromForm = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { name, price } = req.body;
  const itemId = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  if (!itemId) {
    res.status(400).send("Invalid item id");
    return;
  }

  await updateItem(itemId, {
    name,
    price: Number(price),
  });

  res.redirect("/");
};

export const deleteItemFromForm = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const itemId = Array.isArray(req.params.id)
    ? req.params.id[0]
    : req.params.id;

  if (!itemId) {
    res.status(400).send("Invalid item id");
    return;
  }

  await deleteItem(itemId);

  res.redirect("/");
};
