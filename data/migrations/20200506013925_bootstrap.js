exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username").unique().notNullable();
      tbl.string("password").notNullable();
    })
    .createTable("squads", (tbl) => {
      tbl.increments();
      tbl.string("boss", 255).notNullable();
      tbl.string("secondInCommand", 255).notNullable();
      tbl.string("brute", 255).notNullable();
      tbl.string("henchman").notNullable();
      tbl.string("thug", 255).notNullable();
      tbl.string("username").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("squads");
};
