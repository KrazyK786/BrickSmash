// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const config = require('../config/database');
//
// // User Schema
// const BricksmashScoreSchema = mongoose.Schema({
// 	user: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'User'
// 	},
// 	highscore: {
// 		type: Number,
// 		default: 0
// 	}
// });
//
// const BricksmashScore = module.exports = mongoose.model('BricksmashScore', BricksmashScoreSchema);
//
// module.exports.getScoreById = function(id, callback){
// 	BricksmashScore.findById(id, callback);
// }
//
// // module.exports.getScorebyUser = function (user, callback) {
// // 	const query = {user: user}
// // 	BricksmashScores.findOne(query, callback);
// // }
//
// // module.exports.getUserByUsername = function(username, callback){
// // 	const query ={username: username}
// // 	User.findOne(query, callback);
// // }
// //
// // // TODO: do i need error handling for bcrypt.hash?
// // module.exports.addUser = function (newUser, callback){
// // 	bcrypt.genSalt(10, (err, salt) => {
// // 		bcrypt.hash(newUser.password, salt, (err, hash) => {
// // 			newUser.password = hash;
// // 			newUser.save(callback);
// // 		})
// // 	})
// // }
// //
// // module.exports.comparePassword = function(candidatePassword, hash, callback){
// // 	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
// // 		if(err) throw err;
// // 		callback(null, isMatch);
// // 	});
// // }
