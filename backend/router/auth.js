const express = require("express");
const router = express.Router();

require("../DB/conn");
const User = require("../model/userSchema");

router.post("/register", async (req, res) => {
  const { fname, lname, email, phone } = req.body;
  if (!fname || !lname || !email || !phone) {
    return res.status(432).json({ error: "Plz fill all the details" });
  }

  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.status(422).json({ error: "EMAIL ALREADY EXISTS" });
    } else {
      const user = new User({ fname, lname, email, phone });

      await user.save();

      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/getData", (req, res) => {
  let users = User.find({}, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

module.exports = router;
