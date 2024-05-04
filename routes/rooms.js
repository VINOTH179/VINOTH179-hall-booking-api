const express = require('express');
const router = express.Router();
const { getRooms, createRoom } = require('../controllers/roomsController');

router.get('/', getRooms);
router.post('/', createRoom);

module.exports = router;
