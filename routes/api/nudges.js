const router = require("express").Router();
const nudgesController = require("../../controllers/nudgesController");

// Matches with "/api/nudges"
router.route("/")
  .get(nudgesController.findAll)
  .post(nudgesController.create);


module.exports = router;
