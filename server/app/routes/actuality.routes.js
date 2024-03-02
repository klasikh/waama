const { authJwt } = require("../middleware");
const controller = require("../controllers/actuality.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/actuality/all", controller.findAll);

  // Create a new Tutorial
  app.post("/api/actuality/create", [authJwt.verifyToken], controller.create);

};
