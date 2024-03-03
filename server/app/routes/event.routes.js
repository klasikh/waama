const { authJwt } = require("../middleware");
const controller = require("../controllers/event.controller");
const upload = require("../middleware/upload");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // Create a new event
  app.post("/api/event/create", [authJwt.verifyToken], upload.single("file"), controller.create);

  // Retrieve all events
  app.get("/api/event/all", controller.findAll);

  // Retrieve a single event with id
  app.get("/api/event/:id", controller.findOne);

  // Update a event with id
  app.put("/api/event/update/:id", [authJwt.verifyToken], upload.single("file"), controller.update);

  // Delete a event with id
  app.delete("/api/event/delete/:id", [authJwt.verifyToken], controller.delete);

  // Delete all events
  app.delete("/api/event/delete", [authJwt.verifyToken], controller.deleteAll);

};
