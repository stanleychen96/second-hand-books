/**
 * 2017-10-12 Stanley Chen
 */

'use strict';

const knex = require('knex')({
  client: 'mysql',
});

  // --------------------------------user------------------------------

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('userinfo').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('userinfo', function(table) {
        table.increments(); // create 'id'
        table.string('nickname').notNullable().defaultTo('');
        table.integer('readtime').notNullable().defaultTo(0);
        table.string('icon').notNullable().defaultTo('');
        table.integer('shell').notNullable().defaultTo(0);
        // table.string('label').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
  });

  // --------------------------------namelist------------------------------

  app.beforeStart(function* () {
    const hasbrothers = yield app.mysql.query(knex.schema.hasTable('bookreview').toString());
    if (hasbrothers.length === 0) {
      const userlist = knex.schema.createTableIfNotExists('bookreview', function(desk) {
        desk.increments();
        desk.string('userid').notNullable().defaultTo('');
        desk.string('img').notNullable().defaultTo('');
        desk.text('title').notNullable().defaultTo('');
        desk.text('content').notNullable().defaultTo('');
        desk.integer('tapnumber').notNullable().defaultTo(0);
        desk.integer('likenumber').notNullable().defaultTo(0);
        desk.string('icon').notNullable().defaultTo('');
        desk.string('nickname').notNullable().defaultTo('');
        desk.boolean('liketap').notNullable().defaultTo(false);
        // desk.string('label').notNullable.defaultTo('');
        // desk.string('relvant').notNullable().defaultTo('');
        desk.timestamp('create_at').defaultTo(knex.fn.now());
        desk.charset('utf8');
      });
      yield app.mysql.query(userlist.toString());
    }
  });

  // --------------------------------member------------------------------

  app.beforeStart(function* () {
    const havesisters = yield app.mysql.query(knex.schema.hasTable('book').toString());
    if (havesisters.length === 0) {
      const userid = knex.schema.createTableIfNotExists('book', function(level) {
        level.increments();
        level.integer('readnumber').notNullable().defaultTo(0);
        level.integer('tapnumber').notNullable().defaultTo(0);
        level.string('bookimg').notNullable().defaultTo('');
        level.text('booktitle').notNullable().defaultTo(0);
        level.string('author').notNullable().defaultTo(0);
        level.string('nickname').notNullable().defaultTo('');
        // level.string('classify').notNullable().defaultTo('0');
        // level.string('source').notNullable().defaultTo(0);
        // level.dateTime('dateTime').notNullable().defaultTo('2018-09-09 09:09:09.001001');
        level.timestamp('create_at').defaultTo(knex.fn.now());
        level.charset('utf8');
      });
      yield app.mysql.query(userid.toString());
    }
  });

  // --------------------------------------------------------------

};
