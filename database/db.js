const mongoose = require('mongoose');

const dbUri = "mongodb+srv://DevE:test01@cluster0.12pp5.mongodb.net/imagedb?retryWrites=true&w=majority";

const DBConnection = async () => {

    try{
        await mongoose.connect(dbUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("Database is connected...");
    }catch (err) {
        console.log(err.message);
    }
}

module.exports = DBConnection;