const { Router } = require("express");
const { datesController } = require("../controllers/dates.controller");

const router = Router();

router.get("/dates", datesController.getAllDate);
router.post("/add/dates", datesController.createDate);
router.delete('/delete/date/:id', datesController.deleteDate)

module.exports = router;
