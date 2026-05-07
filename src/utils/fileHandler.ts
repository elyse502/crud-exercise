import fs from "node:fs/promises";
import path from "node:path";

const filePath = path.join(__dirname, "../data/data.json");

export const readData = async () => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      (error as NodeJS.ErrnoException).code === "ENOENT"
    ) {
      await fs.writeFile(filePath, "[]");
      return [];
    }

    throw error;
  }
};

export const writeData = async (data: unknown) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};
