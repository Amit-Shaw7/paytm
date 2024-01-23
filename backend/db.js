const mongoose = require('mongoose');

const connectToDB = async () => {
    const DB_URI = process.env.MONGO_URI_PROD;
    try {
        const connectionInstance = await mongoose.connect(DB_URI);
        const host = connectionInstance.connection.host;
        if (host) {
            console.log('Connected to DB at ', host);
        } else {
            console.log('Not connected to DB');
            process.exit(1);
        }
    } catch (error) {
        console.log("Some Error Occured While dB Connection ", error);
    }

}

module.exports = connectToDB;