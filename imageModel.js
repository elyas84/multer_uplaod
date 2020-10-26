const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    
    // imageName: {
    //     type: String
    // },
    img_path: {
        type: String
    }
})

/** MODULE */

const Image = module.exports = mongoose.model('image', imageSchema);
module.exports.get = function(callback, limit) {
    Image.find(callback).limit(limit);
}