const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const dbConnect = require("./config/db/dbConnect");
const { errorHandler, notFound } = require("./middlewares/error/errorHandler");
const router = require("./route/assignmentRoute");

const app = express();
//DB
dbConnect();

//Middleware
app.use(express.json());
//cors
app.use(cors());
app.use("/", router);
app.use(notFound);
app.use(errorHandler);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));
