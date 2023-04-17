const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectToMongo();

const app = express();
app.use(cors());
const port = process.env.port || 5000;

// Available Routes
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/blogs", require("./routes/blogs"));
app.use("/api/blog", require("./routes/blog"));
app.use("/", (req, res) => {
  res.send("Home");
});
app.listen(port, () => {
  console.log(`Blogging Nin-Ja backend listening at http://localhost:${port}`);
});
