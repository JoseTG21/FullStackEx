import express from "express";
import pool from "../db.js";

const router = express.Router();

// READ all
router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM links ORDER BY id");
  res.json(result.rows);
});

// CREATE
router.post("/", async (req, res) => {
  const { name, url } = req.body;
  const result = await pool.query(
    "INSERT INTO links (name, url) VALUES ($1, $2) RETURNING *",
    [name, url]
  );
  res.json(result.rows[0]);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { name, url } = req.body;
  const { id } = req.params;

  await pool.query(
    "UPDATE links SET name=$1, url=$2 WHERE id=$3",
    [name, url, id]
  );

  res.sendStatus(200);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM links WHERE id=$1", [id]);
  res.sendStatus(200);
});

export default router;
