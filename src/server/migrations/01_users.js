exports.up = function (knex) {
    return new Promise(knex.schema.createTableIfNotExists('users', function (table) {
        table.increments('id').primary();
        table.string('firstName');
        table.string('lastName');
        table.string('emailAddress', 128);
        table.timestamps();
    })
    );
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('users');
};
