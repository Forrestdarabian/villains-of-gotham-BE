const express = require("express");
const router = express.Router();

const squads = require("./squadsModel");

//GET Request
router.get("/", (req, res) => {
  squads
    .find()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: "Couldn't Retrieve squads!",
      });
    });
});

//GET Request with certain item
router.get("/:id", (req, res) => {
  const { id } = req.params;
  squads
    .findById(id)
    .then((item) => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({
          message: "The squad with the specified ID does not exist.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: "The item information could not be retrieved.",
      });
    });
});

//POST Request
router.post("/", (req, res) => {
  const { boss, secondInCommand, brute, henchman, thug, username } = req.body;
  squads
    .insert(req.body)
    .then((item) => {
      if (item) {
        res.status(201).json(item);
      } else {
        res.status(400).json({
          message: "Please provide all fields for the squad.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: "There was an error saving squad to the database.",
      });
    });
});

//PUT Request
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { boss, secondInCommand, brute, henchman, thug, username } = req.body;
  if (boss && secondInCommand && brute && henchman && thug && username) {
    squads
      .update(id, req.body)
      .then((updateditem) => {
        if (updateditem) {
          res.status(200).json(updateditem);
        } else {
          res.status(404).json({
            message: "The squad with the specified ID does not exist.",
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          err: err,
          message: "The squad information could not be modified.",
        });
      });
  }
});

//DELETE Request
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  squads
    .remove(id)
    .then((item) => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({
          message: "The squad with the specified ID does not exist.",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: err,
        message: "The squad could not be removed.",
      });
    });
});

module.exports = router;
