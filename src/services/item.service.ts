import { v4 as uuidv4 } from "uuid";
import { readData, writeData } from "../utils/fileHandler";
import { Item } from "../types/item.types";

export const getAllItems = async (): Promise<Item[]> => {
  return await readData();
};

export const createItem = async (itemData: Omit<Item, "id">): Promise<Item> => {
  const items = await readData();

  const newItem: Item = {
    id: uuidv4(),
    ...itemData,
  };

  items.push(newItem);

  await writeData(items);

  return newItem;
};

export const updateItem = async (
  id: string,
  updatedData: Partial<Item>,
): Promise<Item | null> => {
  const items = await readData();

  const itemIndex = items.findIndex((item: Item) => item.id === id);

  if (itemIndex === -1) {
    return null;
  }

  items[itemIndex] = {
    ...items[itemIndex],
    ...updatedData,
  };

  await writeData(items);

  return items[itemIndex];
};

export const deleteItem = async (id: string): Promise<boolean> => {
  const items = await readData();

  const filteredItems = items.filter((item: Item) => item.id !== id);

  if (items.length === filteredItems.length) {
    return false;
  }

  await writeData(filteredItems);

  return true;
};
