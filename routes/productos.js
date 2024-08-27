const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Productos endpoint');
});

module.exports = router;
