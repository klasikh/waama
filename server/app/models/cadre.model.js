module.exports = (sequelize, Sequelize) => {
  const Cadres = sequelize.define("cadres", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    photo: {
      type: Sequelize.STRING
    },
  });

  return Cadres;
};
