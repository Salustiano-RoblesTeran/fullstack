const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({text: 'Hello Worlds'}));

module.exports = router;