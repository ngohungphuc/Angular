/**
 * Created by phuc.ngo on 20/01/2017.
 */
var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://tony:070695@ds117869.mlab.com:17869/tony_meantodo', ['todos']);

router.get('/todos', function (req, res, next) {
    db.todos.find(function (err, todos) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(todos);
        }
    });
});

router.get('/todo/:id', function (req, res, next) {
    db.todos.findOne({
        _id: mongojs.ObjectID(req.params.id)
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(todo);
        }
    });
});

router.post('/todo/', function (req, res, next) {
    var todo = req.body;
    if (!todo.text || !(todo.isCompleted) + '') {
        res.status(400);
        res.json({
            "error": "Invalid data"
        });
    }
    else {
        db.save(todo, function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(result);
            }
        });
    }
});

router.put('/todo/:id', function (req, res, next) {
    var todo = req.body;
    var updateObj = {};

    if (todo.isCompleted) {
        updateObj.isComplted = todo.isCompleted;
    }
    if (todo.text) {
        updateObj.text = todo.text;
    }
    if (!updateObj) {
        res.status(400);
        res.json({
            "error": "Invalid data"
        });
    }
    else {
        db.todos.update({
            _id: mongojs.ObjectID(req.parms.id)
        }, updateObj, {}, function (err, result) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(result);
            }
        });
    }
});


router.delete('/todo/:id', function (req, res, next) {
    db.todos.remove({
        _id: mongojs.ObjectID(req.parms.id)
    }, '', function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(result);
        }
    });
});
module.exports = router;