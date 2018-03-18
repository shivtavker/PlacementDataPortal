var express = require('express');
var router = express.Router();

var Notes = require('../models/notes');

/* Save Companies */
router.post('/company', function(req, res, next) {
    var CompanyName = req.body.name;
    var ID = req.body.ID;

    var company = new Companies({
        ID: ID,
        CompanyName: CompanyName
    });

    company.save(function(err, result) {
        if (err){
           return res.status(500).json({
                title: 'An Error Occured!!',
                error: err
            });
        }
        res.status(201).json({
            title: 'Company Saved!!',
            obj: result
        });
    });
});

router.get('/companies', function(req, res, next) {
    Companies.find({}, function(err, companies){
            if (err){
               return res.status(500).json({
                title: 'An error Occured!!',
                error: err
                }); 
            }
            res.status(201).json({
                companies: companies
            });
        });
});

module.exports = router;