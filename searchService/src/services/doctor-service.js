const DoctorRepository = require("../repository/doctor-repository");

class DoctorService {
  constructor() {
    this.doctorRepository = new DoctorRepository();
  }

  async getAll() {
    try {
      const response = await this.doctorRepository.getAll();
      return response;
    } catch (error) {
      console.log("Something went wrong in Service layer");
      throw error;
    }
  }

  async get(doctorId) {
    try {
      const response = await this.doctorRepository.get(doctorId);
      return response;
    } catch (error) {
      console.log("Something went wrong in Service layer");
      throw error;
    }
  }
}

module.exports = DoctorService;
