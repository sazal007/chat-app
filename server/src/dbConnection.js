const mongoose = require('mongoose')
const colors = require('colors');

module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  try {
    mongoose.connect(process.env.DATABASE, connectionParams);
    console.log(`Connected to database...`.cyan.underline)
  } catch (error) {
    console.log('Could not connect to database...',error)
  }
}

// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red.bold);
//     process.exit();
//   }
// };

// module.exports = connectDB