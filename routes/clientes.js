const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Clientes endpoint');
});

module.exports = router;
