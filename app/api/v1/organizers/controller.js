// import model category
const { createOrganizer } = require('../../../services/mongoose/users');

const { StatusCodes } = require('http-status-codes');

// buat function create
const createCMSOrganizer = async (req, res, next) => {
  try {
    const result = await createOrganizer(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Export fungsi create pada controller categories
module.exports = {
  createCMSOrganizer
};
