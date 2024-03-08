const fs = require("fs");
const db = require("../models");
const Actuality = db.actuality;

exports.create = (req, res, next) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } 

    if (req.file == undefined) {
      return res.send(`Vous devez ajouter un fichier`);
    }

  // Save Actuality to Database
  Actuality.create({
    title: req.body.title,
    description: req.body.description,
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
        res.send({ actu: response, message: "Actualité ajoutée avec succès!" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve all Actualities from the database (with condition).
exports.findAll = (req, res) => {
  // const title = req.query.title;

  Actuality.findAll({
    order: [
      ['id', 'DESC'],
      ['title', 'ASC'],
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

// Find a single Actuality by Id
exports.findOne = (req, res) => {
  Actuality.findOne({ 
    where: { id: req.params.id } 
  })
  .then(response => {
    if (response) {
      res.send(response);
    }
  });
};

// Update a Actuality identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  if (req.file == undefined) {

    Actuality.update({
      title: req.body.title,
      description: req.body.description,
    }, {
      where: {
        id: req.params.id,
      }
    })
      .then(response => {
        if (response) {
          res.send({ actu: response, message: "Actualité modifiée avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });

  } else {

    Actuality.update({
      title: req.body.title,
      description: req.body.description,
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
          res.send({ actu: response, message: "Actualité modifiée avec succès!" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  }

};

// Delete a Actuality with the specified id in the request
exports.delete = (req, res) => {
  Actuality.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then(response => {
    if (response) {
      res.send({ actu: response, message: "Actualité supprimée avec succès!" });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

// Delete all Actualitys from the database.
exports.deleteAll = (req, res) => {
  Actuality.truncate((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Actualitys were deleted successfully!` });
  });
};
