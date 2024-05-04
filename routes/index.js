const express = require('express');
const router = express.Router();

const roomsRouter = require('./rooms');
const bookingsRouter = require('./bookings');
const customersRouter = require('./customers');

router.use('/rooms', roomsRouter);
router.use('/bookings', bookingsRouter);
router.use('/customers', customersRouter);

module.exports = router;
