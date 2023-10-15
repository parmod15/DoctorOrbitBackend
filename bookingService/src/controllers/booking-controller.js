const BookingService = require("../services/booking-service");

const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = bookingService.createBooking(req.body);

    return res.status(200).json({
      data: response,
      success: true,
      message: "Succesfully created a booking",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

module.exports = {
  create,
};
