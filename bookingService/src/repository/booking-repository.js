const { bookings } = require("../models/index");

class BookingRepository {
  async create(data) {
    try {
      const response = await bookings.create(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async get() {
    try {
      const response = await bookings.findAll();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = BookingRepository;
