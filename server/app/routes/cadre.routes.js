const { authJwt } = require("../middleware");
const controller = require("../controllers/cadre.controller");
const upload = require("../middleware/upload");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a new cadre
  app.post("/api/cadre/create", [authJwt.verifyToken], upload.single("file"), controller.create);

  // Retrieve all cadres
  app.get("/api/cadre/all", controller.findAll);

  // Retrieve a single cadre with id
  app.get("/api/cadre/:id", controller.findOne);

  // Update a cadre with id
  app.put("/api/cadre/update/:id", [authJwt.verifyToken], upload.single("file"), controller.update);

  // Delete a cadre with id
  app.delete("/api/cadre/delete/:id", [authJwt.verifyToken], controller.delete);

  // Delete all cadres
  app.delete("/api/cadre/delete", [authJwt.verifyToken], controller.deleteAll);

};
