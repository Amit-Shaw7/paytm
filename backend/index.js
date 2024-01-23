const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require('cors');
const mainRouter = require("./routes/index");
const connectToDB = require("./db");
const PORT = process.env.PORT || 4000;


const app = express();
connectToDB();

app.use(express.json());
app.use(cors());


app.use('/api/v1' , mainRouter);

app.listen(PORT , () => {
    console.log("Listening at port " , PORT);
});


