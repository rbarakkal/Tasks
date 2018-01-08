var mongoose = require('mongoose');
var user = mongoose.model('db_activity');


module.exports = {

    getdetails: function (req, res) {
        console.log("In get details");
        console.log(req.params.user);
        var s = 0;
        var l = 1;

        if (req.query.pagging == 'true') {

            user.find({ 'user': req.params.user }, function (error, result) {
                if (error) {
                    res.json(error);
                }
                else if (!result) {
                    return res.status(400).json([]);
                }
                else {
                    return res.status(200).json(result);
                }

            }).skip(s).limit(l);
        }
        else {
            s = parseInt(req.query.skip);
            l = parseInt(req.query.limit);

            if (s >= 0) {
                if (l > 0) {
                    user.find({ 'user': req.params.user }, function (error, result) {
                        if (error) {
                            res.json(error);
                        }
                        else if (!result) {
                            return res.status(400).json([]);
                        }
                        else {
                            return res.status(200).json(result);
                        }

                    }).skip(s).limit(l);
                }
                else
                    res.json({ Message: "Enter a Valid +ve limit." });
            }
            else
                res.json({ Message: "Enter a offset greater than or equal to Zero." });
        }
    }
}

