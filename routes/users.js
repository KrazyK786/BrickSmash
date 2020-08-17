const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');
// const Comment = require('../models/user');
const Comment = require('../models/comment');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    
    User.addUser(newUser, (err, user) => {
        if (err){
            console.log(err);
            res.json({
                success: false,
                msg: 'Failed to register user :('
            });
        }
        else {
            console.log(user);
            res.json({
                success: true,
                msg: 'User registered!'
            });
        }
    })
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    
    User.getUserByUsername(new RegExp("^" + username + "$", "i"), (err, user) => {
        if (err) throw err;
        
        if (!user){
            return res.json({
                success: false,
                message: 'User not found :('
            });
        }
        
        // check that password is filled in
        if (!password){
            return res.json({
                success: false,
                message: 'Please enter a password!'
            });
        }
        
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            
            if (isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week in seconds
                });
                
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user:user
                    // TODO: why was this like this and not just the user?
                    // user:{
                    //     id: user._id,
                    //     name: user.name,
                    //     username: user.username,
                    //     email: user.email,
                    //     bricksmashscore: user.bricksmashscore,
                    //     tetrisscore: user.tetrisscore
                    // }
                });
            }
            
            else {
                return res.json({
                    success: false,
                    msg: 'Wrong password :('
                });
            }
        });
    });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
    res.json({
        user: req.user
    });
});

// TODO: update to 'profile/:id' ?
// User data by id
router.get('/profile/:id', (req, res, next) => {
    const id = req.params.id;
    
    User.getUserById(id, (err, user) => {
        if (err) throw err;
        
        res.json({
            success: true,
            user: user
        });
    });
});

// Update Bricksmash Score
router.put('/update-bricksmash-score', (req, res, next) => {
    const userId = req.body.userId;
    const newHighScore = req.body.score;
    
    console.log(`userId is ${userId} and new highscore is ${newHighScore}`);
    
    User.updateBrickSmashScore(userId, newHighScore, (err, user) => {
        if (err) throw err;
        // console.log(user);
        res.json({
            success : true,
            user : user
            }
        )
    })
});

// Update Tetris Score
router.put('/update-tetris-score', (req, res, next) => {
    const userId = req.body.userId;
    const newHighScore = req.body.score;
    
    console.log(`userId is ${userId} and new highscore is ${newHighScore}`);
    
    User.updateTetrisScore(userId, newHighScore, (err, user) => {
        if (err) throw err;
        // console.log(user);
        res.json({
                success : true,
                user : user
            }
        )
    })
});

// TODO: update endpoint?
// Get High Scores
router.get('/games/highScores/:game', (req, res, next) => {
    const game = req.params.game;
    
    User.getHighScores(game,(err, usersArray) => {
        if (err) throw err;
        
        res.json({
            success: true,
            sortedUsers : usersArray
        })
    })
})

// Add comment
router.put('/addComment', (req, res, next) => {
    const toId = req.body.toId;
    
    console.log('toId: '+ toId);
    console.log('user: '+ req.body.userId);
    console.log('body: '+ req.body.commentBody);
    
    let newComment = new Comment({
        user: req.body.userId,
        body: req.body.commentBody
    });
    
    console.log(newComment);
    
    User.addComment(toId, newComment, (err, user) => {
        if (err) throw err;
        
        res.json({
            success: true,
            user: user
        })
    })
});

// Delete comment
router.delete('/deleteComment/:id', (req, res, next) => {
    const commentId = req.params.id;
    
    User.deleteComment(commentId, (err, user) => {
        if (err) throw err;
        
        res.json({
            success: true,
            user: user
        })
    });
})

//  Friend
// Add Friend
router.put('/addFriend', (req, res, next) => {
    const id = req.body.id;
    
    console.log(`id is: ${id}`);
    
    const friendId = req.body.friendId;
    
    console.log(`friendId is: ${friendId}`);
    
    
    User.addFriend(id, friendId, (err, user) => {
        if (err) throw err;
        
        res.json({
            success: true,
            user: user
        })
    })
});

// Delete Friend
router.delete('/deleteFriend/:id/:friendId', (req, res, next) => {
    // const id = req.body.id;
    // const friendId = req.body.friendId;
    
    const id = req.params.id;
    const friendId = req.params.friendId;
    
    User.deleteFriend(id, friendId, (err, user) => {
        if (err) throw err;
        
        res.json({
            success: true,
            user: user
        })
    });
})
module.exports = router;

// Update Profile
router.put('/edit-profile', (req, res, next) => {
    const userId = req.body.userId;
    const profile = req.body.profile;
    
    console.log(`New profile is ${profile}`);
    
    User.editProfile(userId, profile, (err, user) => {
        if (err) throw err;
        
        res.json({
            success: true,
            user : user
        });
    })
})

// Search Users
router.get('/searchUsers/', ((req, res, next) => {
    const reqObj = req.query;
    const searchTerm = reqObj.searchTerm;
    let type = reqObj.type;
    
    console.log(type);
    
    User.searchUsers(searchTerm, type, (err, usersArray) => {
        if (err) throw err;

        res.json({
            success: true,
            sortedUsers: usersArray
        })
    })
} ))
