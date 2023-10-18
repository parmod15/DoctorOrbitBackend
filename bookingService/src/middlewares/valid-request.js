const validRequest = (req, res, next) => {
  if (
    !req.body.patientName ||
    !req.body.patientAge ||
    !req.body.patientMobile ||
    !req.body.doctorId
  ) {
    return res.status(404).json({
      data: {},
      success: false,
      message: "bad request , missing parameters",
      error: "missing essentail arguments",
    });
  } else next();
};

module.exports = {
  validRequest,
};
