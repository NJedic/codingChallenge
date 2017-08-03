var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/:person_id/tasks/create', function (req, res) {
  models.Task.create({
    task: req.body.task,
    person_id: req.params.person_id
  }).then(function() {
    res.redirect('/');
  });
});

router.post("/:person_id/deletetask/:id", function(req, res) {
    models.Task.destroy({
      where: {
      	person_id: req.params.person_id,
        id: req.params.id
      }
    }).then(function(data) {
        console.log(data);
        res.redirect("/");
    }); 
  });

module.exports = router;
