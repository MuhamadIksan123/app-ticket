// import model category
// const Categories = require('./model');
const { getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories} = require('../../../services/mongoose/categories');

const { StatusCodes } = require('http-status-codes')

// buat function create
const create = async (req, res, next) => {
  try {
    const result = await createCategories(req);
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// buat function get all
const index = async (req, res, next) => {
  try {
    const result = await getAllCategories();
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// buat function detail
const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req); 

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const result = await updateCategories(req);

      res.status(StatusCodes.OK).json({
        data: result,
      });
  } catch (err) {
    next(err);
  }
};

const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// Export fungsi create pada controller categories
module.exports = {
  index,
  find,
  create,
  update,
  destroy
};
