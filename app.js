import express from "express";
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to conversation starters API");
});

app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});