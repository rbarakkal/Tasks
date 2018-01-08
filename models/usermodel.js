var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema({

    _id: { type: ObjectId },
    updated_at: { type: Date },
    created_at: { type: Date },
    activity_type: { type: String },
    user: { type: String },
    object_id: { type: String },
    module: { type: String },
    is_public: { type: Boolean },
    comments: { type: [] },
    __v: { type: Number }

});


module.exports = mongoose.model('db_activity', userSchema);