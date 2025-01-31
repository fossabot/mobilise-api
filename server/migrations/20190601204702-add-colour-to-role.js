"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Roles", "colour", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "#000000"
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Roles", "colour");
  }
};
