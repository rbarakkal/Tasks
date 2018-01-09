var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema({

    _id: { type: ObjectId },
    updated_at: { type: Date },
    created_at: { type: Date },
    first_name: { type: String },
    last_name: { type: String },
    user_email: { type: String },
    password: { type: String },
    bussiness_name: { type: String },
    contact_phone: { type: String },
    user_name: { type: String },
    display_name: { type: String },
    magic_login_token: { type: String },
    magic_login_sent_at: { type: String },
    role_id: { type: String },
    created_by: { type: String },
    full_name: { type: String },
    bussiness_type: { type: String },
    domain_email: { type: String },
    company_id: { type: String },
    browser_name: { type: String },
    browser_version: { type: String },
    customer_ip_address: { type: String },
    review_schedule_days: { type: Number },
    review_schedule_limit: { type: Number },
    platform_id: { type: String },
    offline_payment: { type: Boolean },
    synch_with_yext: { type: Boolean },
    twitter: { type: Boolean },
    facebook: { type: Boolean },
    source: { type: String },
    is_trail: { type: Boolean },
    review_rating_value: { type: Number },
    review_link_expire_time: { type: Number },
    bad_review_mail: { type: Boolean },
    unsubscribed_mail: { type: Boolean },
    review_auto_approve: { type: Boolean },
    appointment_auto_approve: { type: Boolean },
    google: { type: Boolean },
    notification_settings:
        {
            yAnal: { to_be_send: Boolean },
            gAnal: { to_be_send: Boolean },
            review: { to_be_send: Boolean }
        },
    email_verified: { type: Number },
    device_name: { type: String },
    status: { type: String },
    __v: { type: Number },
    fb_last_sync_time: { type: Date },
    last_login: { type: Date }
});


module.exports = mongoose.model('ga_user', userSchema);