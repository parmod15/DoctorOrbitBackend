const { bookings, sequelize, Sequelize } = require("../models/index");

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

  async deleteAll() {
    try {
      const response = await bookings.truncate();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = BookingRepository;
