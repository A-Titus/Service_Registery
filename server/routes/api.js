const express = require("express");
const Api = require("../models/apiSchema");
const category = require("../models/categorySchema");
const router = express.Router();

//fetch endpoint
//gets back all apis
router.get("/", async (req, res) => {
  try {
    const apis = await Api.find();
    res.json(apis);
  } catch (err) {
    res.json({ message: err });
  }
});

//create endpoint
//submits a new api
router.post("/", async (req, res) => {
  const apis = new Api({
    apiName: req.body.apiName,
    category: req.body.category,
    description: req.body.description,
    creatorName: req.body.creatorName,
    date: req.body.date,
    summary: req.body.summary
  });
  try {
    const newApi = await apis.save();
    res.json(newApi);
  } catch (err) {
    res.json({ message: err });
  }
});

//get all api by category
router.get("/category/:category", async (req, res) => {
  try {
    const apis = await Api.find(req.params);
    res.json(apis);
  } catch (err) {
    res.json({ message: err });
  }
});

//get api by id
router.get("/:_id", async (req, res) => {
  try {
    const apis = await Api.findById(req.params._id);
    res.json(apis);
  } catch (err) {
    res.json({ message: err });
  }
});

//delete endpoint
//Delete api
router.delete("/delete/:_id", async (req, res) => {
  try {
    const removedApi = await Api.remove({ _id: req.params._id });
    res.json(removedApi);
  } catch (err) {
    res.json({ message: err });
  }
});

//update endpoint
//update a api
router.patch("/update/:_id", async (req, res) => {
  try {
    const updatedApi = await Api.updateOne(
      { _id: req.params._id },
      {
        $set: {
          apiName: req.body.apiName,
          category: req.body.category,
          description: req.body.description,
          creatorName: req.body.creatorName,
          date: req.body.date,
          summary: req.body.date
        }
      }
    );
    res.json(updatedApi);
  } catch (err) {
    res.json({ message: err });
  }
});

//////////////////////////

// router.get("/categories", async (req, res) => {
//   try {
//     const apis = await category.find();
//     res.json(apis);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post("/categories", async (req, res) => {
//   const apis = new category({
//     category: req.body.category
//   });
//   try {
//     const newApi = await apis.save();
//     res.json(newApi);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });
module.exports = router;
