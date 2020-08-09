const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const CommentSchema = require('./comment');


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
    profile: {
        type: String,
        default: ""
    },
    comments: [CommentSchema.schema],
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
});

// // index name field for searching
// UserSchema.index({
//     name: 'text'
// });

const User = module.exports = mongoose.model('User', UserSchema);
// const Comment = module.exports = mongoose.model('Comment', CommentSchema);

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

// Return users sorted by highscore
module.exports.getHighScores = function(game, callback){
    // User.find(callback).sort({'games.bricksmash.highscore': -1}).populate('comments.user');
    if (game === 'bricksmash'){
        User.find({})
            .sort({'games.bricksmash.highscore': -1})
            .populate('comments.user')
            .populate('friends')
            .exec((callback));
    }
    
    if (game === 'tetris'){
        User.find({})
            .sort({'games.tetris.highscore': -1})
            .populate('comments.user')
            .populate('friends')
            .exec((callback));
    }
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

// Update profile
module.exports.editProfile = function(id, profile, callback) {
    User.findById(
        id,
        function (err, user) {
            if (err){
                throw err;
            }
            
            user.profile = profile;
            user.save(callback);
        }
    )
}

// Search users
module.exports.searchUsers = function(searchTerm, type = 'all', callback){
    // search users
    if (type === 'name'){
        User.find({
            name: {
                $regex: searchTerm,
                $options: 'i'
            }
        })
            .sort({name: -1})
            // .populate('comments.user')
            // .populate('friends')
            .exec((callback));
    }
    // search usernames
    else if (type === 'username'){
        User.find({
            username: {
                $regex: searchTerm,
                $options: 'i'
            }
        })
            .sort({name: -1})
            // .populate('comments.user')
            // .populate('friends')
            .exec((callback));
    }
    // search both
    else {
        User.find({
            $or: [{
                name: {
                    $regex: searchTerm,
                    $options: 'i'
                }
            },{
                username: {
                    $regex: searchTerm,
                    $options: 'i'
                }
            }]
        })
            .sort({name: -1})
            // .populate('comments.user')
            // .populate('friends')
            .exec((callback));
    }
}
