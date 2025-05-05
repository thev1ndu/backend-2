import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve the HTML file from /public dir
// Tells express that all the files under /public dir are static

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// Serving up the HTML file from the /public
app.get("/", (res, req) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server has started and running on port ${PORT}`);
});
