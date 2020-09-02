const express = require("express");
const category = require("../models/categorySchema");
const router = express.Router();

//fetch endpoint
//gets back all categories
router.get("/", async (req, res) => {
  try {
    const categories = await category.find();
    res.json(categories);
  } catch (err) {
    res.json({ message: err });
  }
});

//create endpoint
//submits a new category
 router.post("/", async (req, res) => {
  //do check to see if category already exists to avoid dupliicate categories

  const categories = new category({
    category: req.body.category
  });
  try {
    const newcategory = await categories.save();
    res.json(newcategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//get all category by category
router.get("/:category", async (req, res) => {
  try {
    const categories = await category.find(req.params);
    res.json(categories);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete endpoint
//Delete category
router.delete("/delete/:_id", async (req, res) => {
  try {
    const removedcategory = await category.remove({ _id: req.params._id });
    res.json(removedcategory);
  } catch (err) {
    res.json({ message: err });
  }
});

//update endpoint
//update a category
router.patch("/update/:_id", async (req, res) => {
  try {
    const updatedcategory = await category.updateOne(
      { _id: req.params._id },
      {
        $set: {
          categoryName: req.body.categoryName,
          category: req.body.category,
          description: req.body.description,
          creatorName: req.body.creatorName,
          date: req.body.date,
          summary: req.body.date
        }
      }
    );
    res.json(updatedcategory);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
