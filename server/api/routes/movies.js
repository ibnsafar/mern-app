const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies");

router.post("/", moviesController.create);
router.get("/all", moviesController.getAll);
router.get("/:id", moviesController.getById);
router.put("/:id", moviesController.updateById);
router.delete("/:id", moviesController.deleteById);

module.exports = router;