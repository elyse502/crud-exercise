import express from "express";
import itemRoutes from "./routes/item.routes";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/api/items", itemRoutes);

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "CRUD API running successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}: http://localhost:${PORT} 🔗`);
});
