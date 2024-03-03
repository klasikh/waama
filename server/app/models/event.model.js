module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("events", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    eventDate: {
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

  return Event;
};
