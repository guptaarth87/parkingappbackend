const express = require('express');
const router = express.Router();

const UsersController = require('../Controllers/Users');
const BookingsController = require('../Controllers/Bookings');
const feedbackController = require('../Controllers/Feedbacks');

router.get('/getUsers',UsersController.getUsers);
router.post('/signup',UsersController.Signup);
router.post('/login',UsersController.Login);

router.get('/allbookings',BookingsController.getAllBookings );
router.get('/recentbookings',BookingsController.getBookingsLast5Hours);
router.get('/prebooked/:place_',BookingsController.getCombinedSlotsLast5Hours);
router.post('/createbooking',BookingsController.createBooking);
router.post('/feedback',feedbackController.createFeedback);

module.exports = router;