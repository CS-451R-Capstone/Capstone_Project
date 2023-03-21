const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
<<<<<<< HEAD
=======
const upload = require('express-fileupload');
>>>>>>> MongoDBConnection
 
// This will help us connect to the database
//
const dbo = require("../db/connection");

recordRoutes.route('/home').get((req, res) => {
<<<<<<< HEAD
    let connect = dbo.connectToServer();
    connect.then(db => {
        db.collection('Classes').aggregate([{$project: {_id: 0, className: 1, sectionID: 1}}]).toArray((err, result) =>{
            if(err){
                throw err;
            }
            res.json(result);
            
        });
    });
    
});

recordRoutes.route('/postings').get((req, res) => {
    let connect = dbo.connectToServer();
    connect.then(db => {
        db.collection('Classes').aggregate([{$project: { 
            _id: 0, 
            className: 1,
            postings: 
            {
            "posting1.is_GTA_Required": 1, 
            "posting1.job_title": 1, 
            "posting2.is_GTA_Required": 1, 
            "posting2.job_title": 1
            }
        }}]).toArray((err, result) => {
            if(err){
                throw err;
            }
            res.json(result);
        });
    })
    
    
    
});

=======
    
    //Serves the classes on request.
    dbo.getDB().collection('Classes').aggregate([{$project: {_id: 0, className: 1, sectionID: 1}}]).toArray((err, result) =>{
        if(err){
            throw err;
        }
        res.json(result);  
    });
});

//Recovers postings from the database.
recordRoutes.route('/postings').get((req, res) => {

    //Serves the collection of postings
    dbo.getDB().collection('Classes').aggregate([{$project: { 
        _id: 0, 
        className: 1,
        postings: 
        {
            job_title: 1, 
            GTA_CERT: 1
        }
    }}]).toArray((err, result) => {
        if(err){
            throw err;
        }
        console.log(result);
        res.json(result);
    });
});

// Accepts file from front end and uploads to database.
recordRoutes.route('/applicants').post(upload({createParentPath: true}),
    (req, res) => 
    {
        dbo.getDB().collection('Classes').updateOne(
            {sectionID: req.body.Section, className: req.body.Class, postings: {$elemMatch: {job_title: req.body.Job}}},
            {$push: {postings: {Applicants: req.files}} }
        )

        res.json({status: 'logged', message: 'logged'})
    }
);
>>>>>>> MongoDBConnection



module.exports = recordRoutes;