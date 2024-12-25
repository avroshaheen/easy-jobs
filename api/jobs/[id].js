// Import the static job data
const jobs = require("../../public/jobsvercel.json");

export default function handler(req, res) {
  // Extract the 'id' from the URL
  const { id } = req.query;

  // Search for the job by ID in the static jobs array
  const job = jobs.find((job) => job.id === id);

  if (job) {
    // If job is found, return the job data
    res.status(200).json(job);
  } else {
    // If job is not found, return a 404 error
    res.status(404).json({ error: "Job not found" });
  }
}
