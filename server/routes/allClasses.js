const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/connection");

recordRoutes.route('/allClasses').get((req, res) => {
    let connect = dbo.connectToServer();
    connect.then(db => {
        db.collection('Classes').find({}).toArray((err, result) =>{
            if(err){
                throw err;
            }
            res.json(result);
        });
    });

    
});

module.exports = recordRoutes;