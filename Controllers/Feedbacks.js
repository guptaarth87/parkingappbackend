const Feedbacks = require('../Models/Feedbacks');


exports.createFeedback = async (req, res) => {
  
    const { name,email, message } = req.body;
    
    try {
      const newFeedback = new Feedbacks({
        name,
        email,
        message
      });
       
      const savedFeedback = await newFeedback.save();
      console.log(newFeedback);
      res.status(200).json(savedFeedback);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };