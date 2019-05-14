var express = require('express');
var router = express.Router();
var multer = require('multer');

var upload = multer({ dest: './uploads/' }).single('thumbnail');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function(req, res) {
  upload(req, res, function(err) {
    if(err) {
      res.send("Failed to write " + req.file.destination + " with " + err);
    } else {
      res.send("uploaded " + req.file.originalname + " as " + req.file.filename + " Size: " + req.file.size);
    }
  });
});

module.exports = router;
