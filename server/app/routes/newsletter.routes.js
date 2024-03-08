const { authJwt } = require("../middleware");
const controller = require("../controllers/newsletter.controller");
const upload = require("../middleware/upload");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a new newsletter
  app.post("/api/newsletter/create", controller.create);

  // Retrieve all newsletters
  app.get("/api/newsletter/all", controller.findAll);

  // Retrieve a single newsletter with id
  app.get("/api/newsletter/:id", controller.findOne);

  // Update a newsletter with id
  app.put("/api/newsletter/update/:id", controller.update);

  // Delete a newsletter with id
  app.delete("/api/newsletter/delete/:id", [authJwt.verifyToken], controller.delete);

  // Delete all newsletters
  app.delete("/api/newsletter/delete", [authJwt.verifyToken], controller.deleteAll);

};
