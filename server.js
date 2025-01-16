import express from "express";
import { join } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8000;

app.get("/api/jobs", (req, res) => {
  res.sendFile(join(fileURLToPath(import.meta.url), "..", "src", "jobs.json"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
