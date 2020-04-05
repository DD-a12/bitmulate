const mongoose = require('mongoose');

const {
    MONGO_URI: mongoURI
} = process.env;

module.exports = (function () {

    return {
        connect () { 
            mongoose.connect(mongoURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }).then(
                () => {
                    console.log('Successfully connected to mongodb')
                }
            ).catch(e => {
                console.error(e);
            });
        }
    }
})();
