const testUserController = (req, res) => {
  try {
    // res.status(200).send({
    //    success: true,
    //    message: "<h1>Test User data API</h1>",
    // });
    res.status(200).send("<h1>Test User data API</h1>");
  } catch (error) {
    console.log("Errort in test API".error);
  }
};

module.exports = { testUserController };
