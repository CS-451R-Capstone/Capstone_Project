const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/connection");

recordRoutes.route('/').get((req, res) => {
    let connect = dbo.connectToServer();
    connect.then(db => {
        db.collection('Classes').aggregate([{$project: {className: 1, sectionID: 1}}]).toArray((err, result) =>{
            if(err){
                throw err;
            }
            res.json(result);
            
        });
    }).finally(() =>{
        let close = dbo.closeServer();
        close.then();
    });

    
});



module.exports = recordRoutes;