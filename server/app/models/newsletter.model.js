module.exports = (sequelize, Sequelize) => {
  const Newsletter = sequelize.define("newsletters", {
    email: {
      type: Sequelize.STRING
    },
  });

  return Newsletter;
};
