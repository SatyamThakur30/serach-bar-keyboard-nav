const mongoose = require("mongoose");
// const keys = require("./keys");

const connectDB = async () => {
  try {
    const conn = mongoose.connect("mongodb://localhost:27017/refrens",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports=connectDB