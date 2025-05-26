const restaurantModel = require("../models/restaurantModel");

const createRestuarantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      code,
      coords,
    } = req.body;
    // Validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please provide title and address",
      });
    }
    const newRestaurant = await restaurantModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      code,
      coords,
    });
    const restaurant = await newRestaurant.save();
    res.status(201).send({
      success: true,
      message: "Restaurant registered successfully",
      restaurant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in CREATE RESTAURANT API",
      error,
    });
  }
};

const getAllRestaurantsController = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find({});
    if (!restaurants) {
      return res.status(404).send({
        success: false,
        message: "No restaurant Availible",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: restaurants.length,
      restaurants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GET ALL RESTAURANTS API",
      error,
    });
  }
};

// GET RESTAURANT BY ID
const getRestaurantyIdController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    // find restaurant
    const restaurant = await restaurantModel.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).send({
        success: false,
        message: "No restaurant found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Resturant found!!",
      restaurant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in GET Restaurant by Id",
      error,
    });
  }
};

// DELETE RESTAURANT || DELETE
const deleteUserController = async (req, res) => {

}

module.exports = {
  createRestuarantController,
  getAllRestaurantsController,
  getRestaurantyIdController,
  getRestaurantyIdController,
  deleteUserController,
};
