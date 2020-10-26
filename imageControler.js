
Image = require("./imageModel");



exports.index = function (req, res) {

    Image.get(function (err, images) { // to see all users in POSTman

        if (err) {
            res.json({
                status: "error",
                message: err.message
            });

        }
      
       
        var nameArr = [];
        images.forEach(function (image){
        
        nameArr.push(image.img_path);

       
    })
      
        res.render('index', {
            images : nameArr
        })

    });
};


exports.new = function (req, res) { // to post one user in POSTman

    const image = new Image();

    image.img_path =req.file.filename;

    // console.log(req.file);
    image.save((err) => {
        if (err) {
            res.json(err);
        }

       
        Image.get(function (err, images) { // to see all users in POSTman

            if (err) {
                res.json({
                    status: "error",
                    message: err.message
                });

            }
     
            var nameArr = [];
            images.forEach(function (image) {

                nameArr.push(image.img_path);

            })

            res.render('index', {
                images: nameArr
            })

        });
    });
};


exports.view = function (req, res) {

    Image.findById(req.params.image_id, (err, image) => { // to see one specific user in POSTman

        if (err) {
            res.json(err);
        }
        res.json({
            message: "image found!",
            image: image
        });
    });
};

exports.update = function (req, res) {

    Image.findById(req.params.image_id, (err, image) => {
        if (err) {
            res.json(err);
        }
        image.img_path = req.body.img_path;

        image.save((err) => {
            if (err) {
                res.json(err);
            }
            res.json({
                message: "image unfo updated",
                image: image
            });
        });

    });

};


exports.delete = function (req, res) {

    Image.deleteOne({
        _id: req.params.image_id
    }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "sucess",
            message: "image deleted"
        });
    });
};

