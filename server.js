const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
const uri = 'mongodb+srv://matthewcy:9rxcFZ3WN4nehXus@cluster0.dgsat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// set up mongoose
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);

// set up routes

app.use("/users", require("./routes/users"));
app.use("/todos", require("./routes/todo"));