const express = require("express");
const router = express.Router();
const Profile = require("../Data/Schema");

// GET all the profiles
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.find(); // --find is a method by mongoose--
    res.status(201).json(profile); // 201 means the request  being created
  } catch (error) {
    res.status(400).json({ message: error.message });
    // 400 means  bad request (malformed syntax) ; you can check the list of the status code here https://www.restapitutorial.com/httpstatuscodes.html ; say Merci :)
  }
});

//  Specific Id Profile
router.get("/:id", async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id); // find the specefic profile by the id
    res.status(200).json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a profile
router.delete("/:id", async (req, res) => {
  try {
    const removedProfile = await Profile.remove({ _id: req.params.id });
    if (res.status(200).json(removedProfile)) {
      console.log(`the user: ${req.body.name}has been deleted `);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const removedProfile = await Profile.remove({ _id: req.params.id });
    if (res.status(200).json(removedProfile)) {
      console.log(`the user:${req.body.name}has been deleted `);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update  a profile
router.patch("/:id", async (req, res) => {
  try {
    const updatedProfile = await Profile.updateOne(
      { _id: req.params.id },
      { $set: { description: req.body.description } }
    );

    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// POST request

router.post("/", async (req, res) => {
  //  console.log(req.body) ;
  const ProfileUser = new Profile({
    name: req.body.name,
    age: req.body.age,
    height: req.body.height,
    description: req.body.description,
  });
  try {
    const data = await ProfileUser.save();
    res.status(201).json(data); // without curly brackets  {}
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  // // save
  // .then(data => {
  //   res.status(201).json(data) ;
  // })
  // .catch(err=> {

  // res.status(400).json({message: err.message}) ;
  // })  ;
});

module.exports = router;
