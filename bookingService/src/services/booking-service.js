const BookingRepository = require("../repository/booking-repository");

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  async createBooking(data) {
    try {
      const response = await this.bookingRepository.create(data);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.bookingRepository.get();
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteAll(isAdmin) {
    try {
      if (isAdmin != "true") {
        throw "not authorized";
      } else {
        const response = await this.bookingRepository.deleteAll();
        return response;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = BookingService;
