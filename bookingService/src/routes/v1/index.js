const BookingController = require("../../controllers/booking-controller");
const { validRequestMiddleware } = require("../../middlewares/index");

const express = require("express");

const router = express.Router();

router.post(
  "/create-booking",
  validRequestMiddleware.validRequest,
  BookingController.create
);

module.exports = router;
