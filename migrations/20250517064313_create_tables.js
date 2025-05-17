/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  
    await knex.schema.createTable('institutes', (table)=>{
        table.increments('id').primary();
        table.enum('type', ['playhouse', 'school', 'college', 'exam_center']);
        table.string('name');
    });

    await knex.schema.createTable('education_boards', (table)=>{
        table.increments('id').primary();
        table.string('name');
    })

    await knex.schema.createTable('mediums', (table)=>{
        table.increments('id').primary();
        table.string('name');
    })

    await knex.schema.createTable('class_categories', (table)=>{
        table.increments('id').primary();
        table.string('name');
    })

    await knex.schema.createTable('standards', (table)=>{
        table.increments('id').primary();
        table.integer('class_category_id').unsigned().references('id').inTable('class_categories');
        table.string('name');
    })

    await knex.schema.createTable('subjects', (table)=>{
        table.increments('id').primary();
        table.integer('standard_id').unsigned().references('id').inTable('standards');
        table.string('name');
    })

    await knex.schema.createTable('registrations', (table)=>{
        table.increments('id').primary();
        table.integer('institute_id').unsigned().references('id').inTable('institutes');
        table.integer('board_id').unsigned().references('id').inTable('education_boards');
        table.integer('medium_id').unsigned().references('id').inTable('mediums');
        table.integer('class_category_id').unsigned().references('id').inTable('class_categories');
        table.integer('standard_id').unsigned().references('id').inTable('standards');
        table.integer('user_id');
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })

    await knex.schema.createTable('colleges_info', (table)=>{
        table.increments('id').primary();
        table.integer('institute_id').unsigned().references('id').inTable('institutes');
        table.string('university');
        table.string('degree_type');
    })

    await knex.schema.createTable('exam_info', (table)=>{
        table.increments('id').primary();
        table.integer('institute_id').unsigned().references('id').inTable('institutes');
        table.string('exam_type');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  
    await knex.schema.dropSchemaIfExists('exam_info');
    await knex.schema.dropSchemaIfExists('colleges_info');
    await knex.schema.dropSchemaIfExists('registrations');
    await knex.schema.dropSchemaIfExists('subjects');
    await knex.schema.dropSchemaIfExists('standards');
    await knex.schema.dropSchemaIfExists('class_categories');
    await knex.schema.dropSchemaIfExists('mediums');
    await knex.schema.dropSchemaIfExists('education_boards');
    await knex.schema.dropSchemaIfExists('institutes');
};
