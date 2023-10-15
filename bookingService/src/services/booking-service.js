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
}

module.exports = BookingService;
