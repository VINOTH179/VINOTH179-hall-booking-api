const express = require('express');
const router = express.Router();
const { getCustomers, getCustomerBookings } = require('../controllers/customersController');

router.get('/', getCustomers);
router.get('/:customerId/bookings', getCustomerBookings);

module.exports = router;