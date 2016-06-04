'use strict';

var async = require('async');
var router = require('express').Router();
var Quiz = require('../../models/quiz');

router.get('/quiz', function (req, res, next) {
  Quiz.find({}).then(function(docs){
    res.status(200).send(docs);
  })
});

router.post('/quiz', function (req, res, next) {
  res.sendStatus(200);
  Quiz.create(req.body, function(err, doc){
    if (err){
      console.log(err);
    }else {
      console.log("DOC",doc);
    }
  })
});

router.put('/', function (req, res, next) {

});

router.delete('/', function (req, res, next) {

});

module.exports = router;