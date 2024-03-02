const db = require("../models");
const config = require("../config/auth.config");
const Actuality = db.actuality;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
   
  // Save Actuality to Database
  Actuality.create({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
  })
    .then(response => {
      console.log(response)
      if (response) {
        res.send({ message: "Actualité ajoutée avec succès!" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve all Actualities from the database (with condition).
exports.findAll = (req, res) => {
  // const title = req.query.title;

  Actuality.findAll().then(response => {
    console.log(response)
    if (response) {
      res.send(response);
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

// Find a single Actuality by Id
exports.findOne = (req, res) => {
  Actuality.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Actuality with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Actuality with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Actualitys
// exports.findAllPublished = (req, res) => {
//   Actuality.getAllPublished((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     else res.send(data);
//   });
// };

// Update a Actuality identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Actuality.updateById(
    req.params.id,
    new Actuality(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Actuality with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Actuality with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Actuality with the specified id in the request
exports.delete = (req, res) => {
  Actuality.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Actuality with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Actuality with id " + req.params.id
        });
      }
    } else res.send({ message: `Actuality was deleted successfully!` });
  });
};

// Delete all Actualitys from the database.
exports.deleteAll = (req, res) => {
  Actuality.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Actualitys were deleted successfully!` });
  });
};
