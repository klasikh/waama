module.exports = (sequelize, Sequelize) => {
  const Actuality = sequelize.define("actualities", {
    title: {
      type: Sequelize.STRING
    },
    description: {
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

  return Actuality;
};
