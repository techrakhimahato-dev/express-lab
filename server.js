const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(logger);

app.get("/", (req, res) => {
  res.render("index", { text: "Hello World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});