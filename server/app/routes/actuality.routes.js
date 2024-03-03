const { authJwt } = require("../middleware");
const controller = require("../controllers/actuality.controller");
const upload = require("../middleware/upload");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a new Actuality
  app.post("/api/actuality/create", [authJwt.verifyToken], upload.single("file"), controller.create);

  // Retrieve all Actualities
  app.get("/api/actuality/all", controller.findAll);

  // Retrieve a single Actuality with id
  app.get("/api/actuality/:id", controller.findOne);

  // Update a Actuality with id
  app.put("/api/actuality/update/:id", [authJwt.verifyToken], upload.single("file"), controller.update);

  // Delete a Actuality with id
  app.delete("/api/actuality/delete/:id", [authJwt.verifyToken], controller.delete);

  // Delete all Actualitys
  app.delete("/api/actuality/delete", [authJwt.verifyToken], controller.deleteAll);

};
