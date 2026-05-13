import express from "express";
import path from "node:path";
import methodOverride from "method-override";
import itemRoutes from "./routes/item.routes";
import viewRoutes from "./routes/view.routes";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// REST API
app.use("/api/items", itemRoutes);

// UI Routes
app.use("/", viewRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}: http://localhost:${PORT} 🔗`);
});
