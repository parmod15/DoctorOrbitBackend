const DoctorService = require("../services/doctor-service");

const doctorService = new DoctorService();

const getAllDoctors = async (req, res) => {
  try {
    const response = await doctorService.getAll();
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Fetched All Doctors",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Fetch All Doctors",
      error: error,
    });
  }
};

const getDoctor = async (req, res) => {
  try {
    const response = await doctorService.get(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully Fetched the Doctor",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Fetch the Doctor",
      error: error,
    });
  }
};

module.exports = {
  getAllDoctors,
  getDoctor,
};
