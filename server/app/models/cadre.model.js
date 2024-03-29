module.exports = (sequelize, Sequelize) => {
  const Cadres = sequelize.define("cadres", {
    name: {
      type: Sequelize.STRING
    },
    workFunc: {
      type: Sequelize.STRING
    },
    imageType: {
      type: Sequelize.STRING,
    },
    imageName: {
      type: Sequelize.STRING,
    },
    imageData: {
      type: Sequelize.BLOB("long"),
    },
  });

  return Cadres;
};
