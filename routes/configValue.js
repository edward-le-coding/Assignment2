var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  if (process.env.configValue) {
    res.send(process.env.configValue);
  } else {
    res.status(400).send("No configValue found");
  }
}
);

module.exports = router;
