const { doctors } = require("../models/index");

class DoctorRepository {
  async getAll() {
    try {
      const response = await doctors.findAll();
      return response;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }

  async get(doctorId) {
    try {
      const doctor = await doctors.findByPk(doctorId);
      return doctor;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw error;
    }
  }
}
