const express = require('express');
const router = express.Router();
const { getBookings, createBooking } = require('../controllers/bookingsController');

router.get('/', getBookings);
router.post('/', createBooking);

module.exports = router;
