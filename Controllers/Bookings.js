const Bookings = require('../Models/Bookings');

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Bookings.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookingsLast5Hours = async (req, res) => {
 
  const fiveHoursAgo = new Date(Date.now() - 5 * 60 * 60 * 1000); // Calculate 5 hours ago
  console.log(place_);
  try {
    const bookings = await Bookings.find({ date_time_: { $gte: fiveHoursAgo } ,place_: place_});
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCombinedSlotsLast5Hours = async (req, res) => {
  const fiveHoursAgo = new Date(Date.now() - 5 * 60 * 60 * 1000); // Calculate 5 hours ago
 
  const { place_ } = req.params;
  try {
    const bookings = await Bookings.find({ date_time_: { $gte: fiveHoursAgo },place_: place_ });
    let combinedSlots = [];
    bookings.forEach(booking => {
      combinedSlots = combinedSlots.concat(booking.slots);
    });
    res.status(200).json({ result: combinedSlots });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBooking = async (req, res) => {
  
  const { email, username, phoneNo, slots,place_, amount } = req.body;
  
  try {
    const newBooking = new Bookings({
      email,
      username,
      phoneNo,
      slots,
      place_,
      amount,
    });
     
    const savedBooking = await newBooking.save();
    console.log(newBooking);
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllBookings,
  getBookingsLast5Hours,
  getCombinedSlotsLast5Hours,
  createBooking,
};
