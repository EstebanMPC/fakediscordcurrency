const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true}
    serverID: {type: String, require: true}
    // name of coin // nombre de la moneda//
    coins: {type Number, default: 1000}
    bank: {type: Number}
})

const model = mongoose.model('profileModels', profileSchema);

module.exports = model;