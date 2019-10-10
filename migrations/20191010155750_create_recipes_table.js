exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl.string("RecipeName").notNullable();
    tbl
      .integer("ingredients_id")
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
