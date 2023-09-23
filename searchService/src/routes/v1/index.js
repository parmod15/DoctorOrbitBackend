const express = require("express");

const { DoctorController } = require("../../controllers/index");

const router = express.Router();

router.get("/doctors", DoctorController.getAllDoctors);
router.get("/doctors/:id", DoctorController.getDoctor);

module.exports = router;
