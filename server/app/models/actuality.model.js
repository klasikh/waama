module.exports = (sequelize, Sequelize) => {
  const Actuality = sequelize.define("actualities", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
  });

  return Actuality;
};
