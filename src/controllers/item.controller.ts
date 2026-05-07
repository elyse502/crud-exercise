import { Request, Response } from "express";
import {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} from "../services/item.service";

export const getItems = async (_req: Request, res: Response) => {
  const items = await getAllItems();

  res.status(200).json(items);
};

export const addItem = async (req: Request, res: Response) => {
  const newItem = await createItem(req.body);

  res.status(201).json({
    message: "Item created successfully",
    data: newItem,
  });
};

export const editItem = async (req: Request, res: Response) => {
  const updatedItem = await updateItem(req.params.id as string, req.body);

  if (!updatedItem) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  res.status(200).json({
    message: "Item updated successfully",
    data: updatedItem,
  });
};

export const removeItem = async (req: Request, res: Response) => {
  const deleted = await deleteItem(req.params.id as string);

  if (!deleted) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  res.status(200).json({
    message: "Item deleted successfully",
  });
};
