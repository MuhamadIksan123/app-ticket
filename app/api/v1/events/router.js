const express = require('express');
router = express();

router.get('/events', (req, res) => {
    const data = [
      {
        _id: 1,
        name: 'semina',
      },
      {
        _id: 1,
        name: 'semina',
      },
    ];
    res.status(200).json({
        message: 'ini adalah halaman events'
    })
})

module.exports = router;