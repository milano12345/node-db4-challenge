exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table
      .boolean("is_a_favorite")
      .notNullable()
      .defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("tasks");
};
