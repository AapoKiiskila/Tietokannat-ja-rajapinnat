var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {                                        // GET-metodi
  res.send('GET-metodi');
});

router.get('/:etunimi', function(req, res) {                                // GET-metodi yhdellä parametrilla
  res.send('Tervehdys '+req.params.etunimi);
});

router.get('/:etunimi/:sukunimi', function(req, res) {
  res.send('Tervehdys '+req.params.etunimi+' '+req.params.sukunimi);        // GET-metodi kahdella parametrilla
});

router.post('/', function(req, res){                                        // POST-metodi
  res.send(req.body);
});

module.exports = router;
