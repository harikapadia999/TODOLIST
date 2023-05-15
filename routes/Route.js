const { Router } = require("express");
const { get, save, update, del } = require("../controllers/Controller");

const router = Router();

router.get("/", get);
router.post("/save", save);
router.post("/update", update);
router.post("/delete", del);

module.exports = router;
