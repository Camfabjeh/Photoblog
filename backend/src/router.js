const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const articlesControllers = require("./controllers/articlesControllers");

router.get("/items", articlesControllers.browse);
router.get("/items/:id", articlesControllers.read);
router.put("/items/:id", articlesControllers.edit);
router.post("/items", articlesControllers.add);
router.delete("/items/:id", articlesControllers.destroy);

module.exports = router;
