const fs = require("fs");
const db = require("../models");
const Event = db.event;

exports.create = (req, res, next) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } 

    if (req.file == undefined) {
      return res.send(`Vous devez ajouter une image de couverture`);
    }

  // Save Event to Database
  Event.create({
    title: req.body.title,
    description: req.body.description,
    eventDate: req.body.eventDate,
    imageType: req.file.mimetype,
    imageName: req.file.originalname,
    imageData: fs.readFileSync(
      "app/resources/uploads/" + req.file.filename
    ),
  })
    .then(response => {
      // console.log(response)
      // fs.writeFileSync(
      //   "app/resources/tmp/" + response.imageName,
      //   response.data
      // );
      if (response) {
        res.send({ actu: response, message: "Evénement ajouté avec succès!" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve all Actualities from the database (with condition).
exports.findAll = (req, res) => {
  // const title = req.query.title;

  Event.findAll().then(response => {
    // console.log(response)
    if (response) {
      res.send(response);
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

// Find a single Event by Id
exports.findOne = (req, res) => {
  Event.findOne({ 
    where: { id: req.params.id } 
  })
  .then(response => {
    if (response) {
      res.send(response);
    }
  });
};

// Update a Event identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  if (req.file == undefined) {

    Event.update({
      title: req.body.title,
      description: req.body.description,
    }, {
      where: {
        id: req.params.id,
      }
    })
      .then(response => {
        if (response) {
          res.send({ actu: response, message: "Evénement modifié avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  } else {

    Event.update({
      title: req.body.title,
      description: req.body.description,
      eventDate: req.body.eventDate,
      imageType: req.file.mimetype,
      imageName: req.file.originalname,
      imageData: fs.readFileSync(
        "app/resources/uploads/" + req.file.filename
      ),
    }, {
      where: {
        id: req.params.id,
      }
    })
      .then(response => {
        if (response) {
          res.send({ actu: response, message: "Evénement modifié avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  }

};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  Event.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then(response => {
    if (response) {
      res.send({ actu: response, message: "Evénement supprimé avec succès!" });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  Event.truncate((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Events were deleted successfully!` });
  });
};
