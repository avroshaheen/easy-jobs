const express = require("express");
const app = express();
const port = 8000;
const jobs = require("./public/jobs.json"); // Static job data

// API to get all jobs
app.get("/api/jobs", (req, res) => {
  res.json(jobs); // Serve all jobs from jobs.json
});

// API to get job by ID
app.get("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (job) {
    res.json(job); // Return job data by ID
  } else {
    res.status(404).json({ error: "Job not found" }); // Handle not found error
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
