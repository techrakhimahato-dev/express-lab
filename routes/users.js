const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users Page");
})

router.get("/new", (req, res) => {
  res.send("New User Page");
})

router.post("/", (req, res) => {
  res.send("Create User");
}); 

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

router.route("/:id/edit")
  .get((req, res) => {
    const userId = req.params.id;
    res.send(`Edit User ID: ${userId}`);
  })
  .put((req, res) => {
    const userId = req.params.id;
    res.send(`Update User ID: ${userId}`);
  })
  .delete((req, res) => {
    const userId = req.params.id;
    res.send(`Delete User ID: ${userId}`);
  });

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
  router.param("id", (req, res, next, id) => {
    console.log(`User ID: ${id}`);
    req.user = users[id];
    next();
  });

module.exports = router;