const express = require('express');
const router = express.Router();

router.route('/').get((req, res, next) => {
  res.send('all items');
});


module.exports = router