// import model category
const { createOrganizer, createUsers } = require('../../../services/mongoose/users');

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

const createCMSUser = async (req, res, next) => {
  try {
    const result = await createUsers(req);

    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Export fungsi create pada controller categories
module.exports = {
  createCMSOrganizer,
  createCMSUser
};
