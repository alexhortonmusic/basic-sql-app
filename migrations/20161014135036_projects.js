'use strict'

const knex = require('knex')

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable('Projects', (table) => {
      table.increments();
      table.string('ProjectName')
      table.integer('StudentId').references('Students.id')
  })
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('Students')
};
