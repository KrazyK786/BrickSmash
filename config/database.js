module.exports = {
    database: "mongodb://localhost:27017/bricksmash",
    secret: "teamRK",
    options: {
        useNewUrlParser: true,
        useFindAndModify: false, //may need to change once setup for score changes - KEJ
        useUnifiedTopology: true
    }
}