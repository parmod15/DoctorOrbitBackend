const BookingController = require("../../controllers/booking-controller");
const { validRequestMiddleware } = require("../../middlewares/index");

const express = require("express");

const router = express.Router();

router.post(
  "/create-bookings",
  validRequestMiddleware.validRequest,
  BookingController.create
);

router.get("/get-bookings", BookingController.getAll);

module.exports = router;
