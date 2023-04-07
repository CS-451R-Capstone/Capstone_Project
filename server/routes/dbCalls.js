const express = require("express");
 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
const upload = require('express-fileupload');
 
// This will help us connect to the database
//
const dbo = require("../db/connection");

recordRoutes.route('/home').get((req, res) => {
    
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
        res.json(result);
    });
});

// Accepts file from front end and uploads to database.
recordRoutes.route('/applicants').post(upload({createParentPath: true}),
    (req, res) => 
    {
        dbo.getDB().collection('Classes').updateOne(
            {sectionID: req.body.Section, className: req.body.Class, postings: {$elemMatch: {job_title: req.body.Job}}},
            {$push: {'postings.$.Applicants': req.files} }
        )

        res.json({status: 'logged', message: 'logged'})
    }
);



module.exports = recordRoutes;