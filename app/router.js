define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");

  // Defining the application router.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "create": "create"
    },

    index: function() {
      console.log("Welcome to your / route.");
    },

    create: function () {
      console.log("Welcome to the /create route.");
    }

  });

  module.exports = Router;
});
