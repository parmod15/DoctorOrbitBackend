const BookingController = require("../../controllers/booking-controller");

const express = require("express");

const router = express.Router();

router.post("/create-booking", BookingController.create);

module.exports = router;
