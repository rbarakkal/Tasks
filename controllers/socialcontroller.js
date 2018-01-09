var mongoose = require('mongoose');
var user = mongoose.model('ga_user');


module.exports = {
    isloggedin: function (req, res) {
        console.log("In get details");
        var s = 0;
        var l = 1;
        if (req.query.pagging == 'true') {
            dataretrive(s, l, res);
        }
        else {
            s = parseInt(req.query.skip);
            l = parseInt(req.query.limit);

            if (s >= 0) {
                if (l > 0) {
                    dataretrive(s, l, res);
                }
                else
                    res.json({ Message: "Enter a Valid +ve limit." });
            }
            else
                res.json({ Message: "Enter a offset greater than or equal to Zero." });
        }
    }
}

//=============================  Helper Function  =================
var dataretrive = function ( s, l, res) {
    user.find({
        $or: [
            { 'twitter': true },
            { 'facebook': true },
            { 'google': true }
        ]
    }, { _id: 1, first_name: 1, last_name: 1, user_email: 1 },
        function (error, result) {
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