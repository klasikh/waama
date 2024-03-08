const fs = require("fs");
const db = require("../models");
const Newsletter = db.newsletter;

exports.create = async (req, res, next) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } 

  const verifEmail =  Newsletter.findOne({ 
    where: { email: req.body.email } 
  })
  .then(response => {
    return response;
  });

  const emailVeri = await verifEmail;

  if(emailVeri === null) {
    // Save Newsletter to Database
    Newsletter.create({
      email: req.body.email,
    })
      .then(response => {
        if (response) {
          res.send({ actu: response, message: "Abonnement effectué avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

    } { 

    res.send({ actu: emailVeri, message: "Abonnement effectué avec succès!" });
  }
};

// Retrieve all Actualities from the database (with condition).
exports.findAll = (req, res) => {
  // const email = req.query.email;

  Newsletter.findAll({
    order: [
      ['id', 'DESC'],
      ['email', 'ASC'],
    ],
  }).then(response => {
    // console.log(response)
    if (response) {
      res.send(response);
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

// Find a single Newsletter by Id
exports.findOne = (req, res) => {
  Newsletter.findOne({ 
    where: { id: req.params.id } 
  })
  .then(response => {
    if (response) {
      res.send(response);
    }
  });
};

// Update a Newsletter identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  if (req.file == undefined) {

    Newsletter.update({
      email: req.body.email,
    }, {
      where: {
        id: req.params.id,
      }
    })
      .then(response => {
        if (response) {
          res.send({ actu: response, message: "Abonnement modifié avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  } else {

    Newsletter.update({
      email: req.body.email,
    }, {
      where: {
        id: req.params.id,
      }
    })
      .then(response => {
        if (response) {
          res.send({ actu: response, message: "Abonnement modifié avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  }

};

// Delete a Newsletter with the specified id in the request
exports.delete = (req, res) => {
  Newsletter.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then(response => {
    if (response) {
      res.send({ actu: response, message: "Abonnement supprimé avec succès!" });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

// Delete all Newsletters from the database.
exports.deleteAll = (req, res) => {
  Newsletter.truncate((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Newsletters were deleted successfully!` });
  });
};
