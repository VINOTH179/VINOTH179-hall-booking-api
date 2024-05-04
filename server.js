const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.json());

// Data storage
let rooms = [];
let bookings = [];

// Routes

// Create a room
app.post('/rooms', (req, res) => {
  const { seats, amenities, pricePerHour } = req.body;
  const room = { id: uuidv4(), seats, amenities, pricePerHour };
  rooms.push(room);
  res.status(201).json(room);
});

// Book a room
app.post('/bookings', (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;

  // Check if room is available
  const isRoomAvailable = bookings.some(booking => (
    booking.roomId === roomId &&
    booking.date === date &&
    !(endTime <= booking.startTime || startTime >= booking.endTime)
  ));

  if (isRoomAvailable) {
    res.status(400).json({ error: 'Room already booked for the given time slot' });
  } else {
    const booking = { id: uuidv4(), customerName, date, startTime, endTime, roomId };
    bookings.push(booking);
    res.status(201).json(booking);
  }
});

// Get all rooms with booked data
app.get('/rooms/bookings', (req, res) => {
  const roomsWithBookings = rooms.map(room => {
    const bookedData = bookings.filter(booking => booking.roomId === room.id);
    return { ...room, bookedData };
  });
  res.json(roomsWithBookings);
});

// Get all customers with booked data
app.get('/customers/bookings', (req, res) => {
  const customersWithBookings = bookings.map(booking => {
    const room = rooms.find(room => room.id === booking.roomId);
    return { customerName: booking.customerName, roomName: room.name, date: booking.date, startTime: booking.startTime, endTime: booking.endTime };
  });
  res.json(customersWithBookings);
});

// Get booking history for a customer
app.get('/customers/:customerName/bookings', (req, res) => {
  const { customerName } = req.params;
  const customerBookings = bookings.filter(booking => booking.customerName === customerName);
  res.json(customerBookings);
});
app.get('/',(req,res)=>{ res.send('App is running')})
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});