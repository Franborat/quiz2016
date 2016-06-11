'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return  queryInterface.addColumn( 'Commnets', 
                                        'AuthorId', 
                                        { type: Sequelize.INTEGER }
                                      );
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Comments','AuthorId');
  }
};