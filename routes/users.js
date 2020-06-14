const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');
const Comment = require('../models/user');

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
            res.json({
                success: false,
                msg: 'Failed to register user :('
            });
        }
        else {
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
                    user:{
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        bricksmashscore: user.bricksmashscore,
                        tetrisscore: user.tetrisscore
                    }
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

// User data by id
router.get('/:id', (req, res, next) => {
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

// Add comment
router.put('/addComment', (req, res, next) => {
    const toId = req.body.toId;
    
    console.log(toId);
    
    let newComment = new Comment({
        user: req.body.userId,
        body: req.body.commentBody
    });
    
    
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

module.exports = router;
