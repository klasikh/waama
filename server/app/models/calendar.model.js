module.exports = (sequelize, Sequelize) => {
  const Calendar = sequelize.define("calendars", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    calendarDate: {
      type: Sequelize.STRING
    },
  });

  return Calendar;
};
