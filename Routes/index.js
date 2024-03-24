const express = require('express');
const router = express.Router();

const UsersController = require('../Controllers/Users');
const BookingsController = require('../Controllers/Bookings');

router.get('/getUsers',UsersController.getUsers);
router.post('/signup',UsersController.Signup);
router.post('/login',UsersController.Login);

router.get('/allbookings',BookingsController.getAllBookings );
router.get('/recentbookings',BookingsController.getBookingsLast5Hours);
router.get('/prebooked',BookingsController.getCombinedSlotsLast5Hours);
router.post('/createbooking',BookingsController.createBooking);

module.exports = router;