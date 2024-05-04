const customers = [];
const bookings = []; // Store bookings data here

const getCustomers = (req, res) => {
  res.json(customers);
};

const getCustomerBookings = (req, res) => {
  const customerId = req.params.customerId;
  // Filter bookings for the given customerId
  const customerBookings = bookings.filter(booking => booking.customerId === customerId);
  res.json(customerBookings);
};

module.exports = { getCustomers, getCustomerBookings };