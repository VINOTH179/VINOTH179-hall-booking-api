let bookings = [];

const getBookings = (req, res) => {
  res.json(bookings);
};

const createBooking = (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;
  // Check if the room is available for booking on the given date and time
  // Add booking logic here
  const newBooking = { id: bookings.length + 1, customerName, date, startTime, endTime, roomId };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

module.exports = { getBookings, createBooking };