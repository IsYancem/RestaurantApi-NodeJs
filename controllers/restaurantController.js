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

module.exports = { createRestuarantController };
