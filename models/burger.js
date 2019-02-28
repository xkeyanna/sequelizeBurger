// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var burger = sequelize.define("buger", {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
    });
  
  // The variables cols and vals are arrays.
  burger.sync();

// Export the database functions for the controller (catsController.js).
module.exports = burger;