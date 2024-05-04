let rooms = [];

const getRooms = (req, res) => {
  res.json(rooms);
};

const createRoom = (req, res) => {
  const { name, seats, amenities, price } = req.body;
  const newRoom = { id: rooms.length + 1, name, seats, amenities, price };
  rooms.push(newRoom);
  res.status(201).json(newRoom);
};

module.exports = { getRooms, createRoom };
