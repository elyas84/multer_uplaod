const express = require('express');
const router = express.Router();
const imageControler = require('./imageControler');
const multer = require('multer');
const path = require('path');


router.get('/', (req, res) => {

    res.json({
        status: "woring",
        message: "This is the /api/route"

    });
});

/** using multer */

const storage = multer.diskStorage({
    destination: function (req, file, callback) { callback(null, './public/imgfiles')}, // images destination
    filename: function (req, file, callback) { callback(null,file.originalname)} // random file name    

});

/** Checking */
function fileFilter(req, file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } 
    else if(req.file==undefined) {

        cb('upload can not be empty! please uplaod an image');
    }

    else {
        cb('Images Only!');
    }

}

const upload = multer({storage:storage, fileFilter: fileFilter}); //name attr from htm



router.route('/upload').get(imageControler.index).
    post(upload.single('myImg'),imageControler.new);
    router.route('/uplaod/:image_id').
    get(imageControler.view).
    patch(imageControler.update).
    put(imageControler.update).
    delete(imageControler.delete);

module.exports = router;