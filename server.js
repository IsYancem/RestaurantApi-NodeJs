const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

// dot env configutration
dotenv.config();

// DB connection
connectDb();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
// URL => http://localhost:8000/

app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/restaurant", require("./routes/restaurantRoutes"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Service. aPI bASE pROJECT</h1>");
});

// PORT
const PORT = process.env.PORT || 8000;

// listen
app.listen(PORT, () => {
  console.log(`NPM Server running on ${PORT}`.white.bgMagenta);
});