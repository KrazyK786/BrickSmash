const env = require('dotenv').config();

// const dbURL = "mongodb://localhost:27017/bricksmash";
// const dbURL = `mongodb://${process.env.COSMOSDB_HOST}:${process.env.COSMOSDB_PORT}/${process.env.COSMOSDB_DBNAME}?ssl=true&replicaSet=globaldb&retrywrites=false`;

// // LOCAL
// module.exports = {
//     database: "mongodb://localhost:27017/bricksmash",
//     secret: "teamRK",
//     options: {
//         useNewUrlParser: true,
//         useFindAndModify: false, //may need to change once setup for score changes - KEJ
//         useUnifiedTopology: true
//     }
// }

// AZURE
module.exports = {
    database: `mongodb://${process.env.COSMOSDB_HOST}:${process.env.COSMOSDB_PORT}/${process.env.COSMOSDB_DBNAME}?ssl=true&replicaSet=globaldb&retrywrites=false`,
    secret: "teamRK",
    options: {
        useNewUrlParser: true,
        useFindAndModify: false, //may need to change once setup for score changes - KEJ
        useUnifiedTopology: true,
        auth: {
                user: process.env.COSMODDB_USER,
                password: process.env.COSMOSDB_PASSWORD
            }
    }
}
