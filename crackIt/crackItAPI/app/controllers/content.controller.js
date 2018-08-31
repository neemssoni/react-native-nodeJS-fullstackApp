const Content = require('/Users/neelamsoni/crackIt/crackItAPI/app/models/content.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.content_list = function(req, res, next) {
    Content.find(function (err, content) {
        if (err) return next(err);
        res.send(content);
    })
};

exports.content_create = function (req, res, next) {
    var content = new Content(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    content.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Content Created successfully')
    })
};

exports.content_details = function (req, res, next) {
    Content.findById(req.params.id, function (err, content) {
        if (err) return next(err);
        res.send(content);
    })
};

exports.content_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Content udpated.');
    });
};

exports.content_delete = function (req, res, next) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
