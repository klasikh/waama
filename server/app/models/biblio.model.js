module.exports = (sequelize, Sequelize) => {
  const Biblio = sequelize.define("biblios", {
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

  return Biblio;
};
