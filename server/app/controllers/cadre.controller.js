const fs = require("fs");
const db = require("../models");
const Cadre = db.cadre;

exports.create = (req, res, next) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } 

    if (req.file == undefined) {
      return res.send(`Vous devez ajouter une photo du cadre`);
    }

  // Save Cadre to Database
  Cadre.create({
    name: req.body.name,
    workFunc: req.body.workFunc,
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
        res.send({ actu: response, message: "Cadre ajouté avec succès!" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve all Actualities from the database (with condition).
exports.findAll = (req, res) => {
  // const name = req.query.name;

  Cadre.findAll({
    order: [
      ['name', 'ASC'],
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

// Find a single Cadre by Id
exports.findOne = (req, res) => {
  Cadre.findOne({ 
    where: { id: req.params.id } 
  })
  .then(response => {
    if (response) {
      res.send(response);
    }
  });
};

// Update a Cadre identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  if (req.file == undefined) {

    Cadre.update({
      name: req.body.name,
      workFunc: req.body.workFunc,
    }, {
      where: {
        id: req.params.id,
      }
    })
      .then(response => {
        if (response) {
          res.send({ actu: response, message: "Cadre modifié avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  } else {

    Cadre.update({
      name: req.body.name,
      workFunc: req.body.workFunc,
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
          res.send({ actu: response, message: "Cadre modifié avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  }

};

// Delete a Cadre with the specified id in the request
exports.delete = (req, res) => {
  Cadre.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then(response => {
    if (response) {
      res.send({ actu: response, message: "Cadre supprimé avec succès!" });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

// Delete all Cadres from the database.
exports.deleteAll = (req, res) => {
  Cadre.truncate((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Cadres were deleted successfully!` });
  });
};
