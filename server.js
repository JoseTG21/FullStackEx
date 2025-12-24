import express from "express";
import cors from "cors";
import linksRoutes from "./routes/links.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/links", linksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
