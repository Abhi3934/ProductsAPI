const mongoose = require("mongoose");
const { options } = require("../routes/products");

uri = "mongodb://abhinavdongre1997:swaras3934@ac-6why6cs-shard-00-00.lmezqhd.mongodb.net:27017,ac-6why6cs-shard-00-01.lmezqhd.mongodb.net:27017,ac-6why6cs-shard-00-02.lmezqhd.mongodb.net:27017/?ssl=true&replicaSet=atlas-141rw0-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connect db");
    return mongoose.connect(uri, { useNewUrlParser : true, useUnifiedTopology : true,});
};

module.exports = connectDB;
