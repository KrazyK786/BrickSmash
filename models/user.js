const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Comment Schema
const CommentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    comments: [CommentSchema],
    friends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    games: {
        bricksmash:{
            highscore: {
                type: Number,
                default: 0
            }
        },
        tetris:{
            highscore: {
                type: Number,
                default: 0
            }
        }
    }
    // bricksmashscore: {
    //     type: Number,
    //     default: 0
    // },
    // tetrisscore: {
    //     type: Number,
    //     default: 0
    // }
});

const User = module.exports = mongoose.model('User', UserSchema);
const Comment = module.exports = mongoose.model('Comment', CommentSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback).
    populate('comments.user').
    populate('friends');
}

module.exports.getUserByUsername = function(username, callback){
    const query ={username: username}
    User.findOne(query, callback);
}

// TODO: do i need error handling for bcrypt.hash?
module.exports.addUser = function (newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

// Return users sorted by BrickSmash highscore
module.exports.getBrickSmashHighScores = function(callback){
    // User.find(callback).sort({'games.bricksmash.highscore': -1}).populate('comments.user');
    User.find({})
        .sort({'games.bricksmash.highscore': -1})
        .populate('comments.user')
        .populate('friends')
        .exec((callback));
    // User.find({}).exec((err, userArr) => {
    //     if (err) throw err;
    //
    //     console.log(userArr);
    // });
}

// Update BrickSmash Score
module.exports.updateBrickSmashScore = function(id, score, callback){
    
    User.findById(
        id,
        function (err, user) {
            if (err){
                // console.log(err);
                // return;
                throw err;
            }
            
            user.games.bricksmash.highscore = score;
            // user.bricksmashscore = score;
            user.save(callback);
            // console.log(user.bricksmashscore);
        }
    );
}

// Update Tetris Score
module.exports.updateTetrisScore = function(id, score, callback){
    
    User.findById(
        id,
        function (err, user) {
            if (err){
                // console.log(err);
                // return;
                throw err;
            }
            user.games.tetris.highscore = score;
            // user.tetrisscore = score;
            user.save(callback);
            // console.log(user.tetrisscore);
        }
    );
}

//  Comments
// Add Comment
module.exports.addComment = function(id, comment, callback) {
    
    User.findById(
        id,
        function (err, user) {
            if (err){
                throw err;
            }
            
            
            user.comments.push(comment);
            user.save(callback);
        }
    );
    
}

// Delete Comment
module.exports.deleteComment = function(commentId, callback){
    // User.findById(
    //     userId,
    //     function (err, user) {
    //         if (err) throw err;
    //
    //         user.comments.id(commentId).remove();
    //         user.save(callback);
    //     }
    // )
    
    User.findOne({
        'comments':{
            $elemMatch: {
                '_id': commentId
            }
        }
    },
    function (err, user) {
        if (err) throw err;

        user.comments.id(commentId).remove();
        user.save(callback);
    });
}

//  Friend
// Add friend
module.exports.addFriend = function(id, friendId, callback) {
    
    User.findById(
        id,
        function (err, user) {
            if (err){
                throw err;
            }
            
            user.friends.push(friendId);
            
            user.save(callback);
        }
    );
}

// Delete friend
module.exports.deleteFriend = function(id, friendId, callback){
    User.findById(
        id,
        function (err, user) {
            if (err) throw err;
            
            user.friends.pull({
                _id: friendId
            });
            // user.friends.id(friendId).remove();
            user.save(callback);
        });
}

// Transform _id to id
// module.exports.transform = function (user) {
//     let obj = user.toObject();
//
//     // Rename field
//     obj.id = obj._id;
//     delete obj._id;
//
//     return obj;
// }

UserSchema.method('transform', function () {
    let obj = this.toObject();
    
    // Rename field
    obj.id = obj._id;
    // delete obj._id;
    
    return obj;
} )
