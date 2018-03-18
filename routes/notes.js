var express = require('express');
var router = express.Router();

var Notes = require('../models/notes');

/* Save Notes */
router.post('/', function(req, res, next) {
    var ID = req.body.ID;
    var CompanyID = req.body.CompanyID;
    var columnID = req.body.columnID;
    var title = req.body.title;
    var body = req.body.body;

    var note = new Notes({
        ID: ID,
        CompanyID: CompanyID,
        columnID: columnID,
        title: title,
        body: body
    });

    note.save(function(err, result) {
        if (err){
           return res.status(500).json({
                title: 'An Error Occured!!',
                error: err
            });
        }
        res.status(201).json({
            title: 'Note Saved!!',
            obj: result
        });
    });
});
 
router.get('/get', function(req, res, next) {
    Notes.find({}, function(err, notes){
            if (err){
               return res.status(500).json({
                    title: 'An error Occured!!',
                    error: err
               }); 
            }
            res.status(201).json({
                notes: notes
            });
        });
});

router.patch('/edit', function(req, res, next) {
    var noteID = req.query.noteID;
    Notes.find({ID: noteID}, function(err, note){
        if (err){
            return res.status(500).json({
                title: 'An error Occured!!',
                error: err
            }); 
        }
        if (!note) {
            return res.status(500).json({
                title: 'Could Not Find Note',
                error: {message: 'Note Not Found'}
            }); 
        }
        note[0].title = req.body.title;
        note[0].body = req.body.body;
        console.log(note[0]);
        note[0].save(function(err, result) {
            if (err){
                return res.status(500).json({
                        title: 'An Error Occured!!',
                        error: err
                    });
            }
            res.status(201).json({
                title: 'Note Edited!!',
                obj: result
            });
        });
    });
});

router.delete('/delete', function(req, res, next) {
    var noteID = req.query.noteID;
    Notes.remove({ID: noteID}, function(err, result) {
            if (err){
                return res.status(500).json({
                        title: 'An Error Occured!!',
                        error: err
                    });
            }
            res.status(201).json({
                title: 'Note Deleted!!',
                obj: result
            });
    });
});

module.exports = router;