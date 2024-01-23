const express = require("express");
const router = express.Router();
const Model = require("../model/model");
// post method
router.post("/post", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    nomer: req.body.nomer,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



// get all method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get by id method
router.get("/getOne/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findById(id);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update by id method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const option = { new: true };
    const data = await Model.findByIdAndUpdate(id, updatedData, option);
    res.send(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData = await Model.findByIdAndDelete(id);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
