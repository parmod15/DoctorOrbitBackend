const BookingService = require("../services/booking-service");

const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = bookingService.createBooking(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Succesfully created a booking",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong in creating booking",
      error: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await bookingService.getAll();
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched all bookings",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Something went wrong in fetching all bookings",
      error: error,
    });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const response = await bookingService.delete(req.params.id);
    console.log("params is ", req.params);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Succesfully deleted a booking",
      error: {},
    });
  } catch (error) {
    return res.status(501).json({
      data: {},
      success: false,
      message: "Something went wrong in deleting booking",
      error: {},
    });
  }
};

const deleteAll = async (req, res) => {
  try {
    const response = await bookingService.deleteAll(req.body.isAdmin);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Succesfully deleted all bookings",
      error: {},
    });
  } catch (error) {
    return res.status(501).json({
      data: {},
      success: false,
      message: " Something went wrong in deleting bookings",
      error: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  deleteBooking,
  deleteAll,
};
