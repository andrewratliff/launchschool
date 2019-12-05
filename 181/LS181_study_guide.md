# SQL

- Explain the difference between INNER, LEFT OUTER, and RIGHT OUTER joins
  - INNER JOIN: Joins two tables on a condition and filters out rows from both
    tables where the condition doesn't evaluate to true
  - LEFT OUTER JOIN: Joins two tables on a condition keeping all rows from the
    left table and filtering out any rows from the right table where the
    condition doesn't evaluate to true
  - RIGHT OUTER JOIN: Joins two tables on a condition keeping all rows from the
    right table and filtering out any rows from the left table that don't match
    the condition
- Name and define the three sub-languages of SQL
  - Data Definition Language is used to define the structure of a database as
    well as the tables and columns. DDL includes CREATE TABLE, ALTER TABLE, ADD
    COLUMN.
  - Data manipulation language is used to retrieve or modify data stored in a
    database. DML includes SELECT, INSERT, UPDATE, and DELETE.
  - Data control language is used to control the rights and access roles of
    users who interact with the database.
- Write SQL statements using INSERT, UPDATE, DELETE, CREATE/ALTER/DROP TABLE,
  and ADD/ALTER/DROP COLUMN
- Understand how to use GROUP BY, WHERE, and HAVING
  - WHERE is used in a SELECT, after the FROM table is specified, to remove any
    rows where the given condition does not evalutate to true.
  - GROUP BY takes the results of a select statement (including joined tables)
    and divides the rows into groups. Aggregate functions can then be computed
    on the groupings.
  - HAVING is similar to the WHERE clause in that it is used to eliminate
    groups, resulting from a GROUP BY, from results. In almost all cases,
    columns mentioned in a HAVING should also be mentioned in a GROUP BY.

# PostgreSQL

- Describe what a sequence is and what they are used for
  - A sequence is a special kind of relation that generates a series of numbers.
    A sequence has a predetermined set of numbers and remembers the last number
    it generated. Once a value is returned for a sequence, it will not be
    returned again.
- Create an auto-incrementing column

  `serial` columns are usually used to create auto-incrementing columns in
  PostgreSQL.

  ``` SQL
    CREATE TABLE users (id serial);

    -- Same as:

    CREATE SEQUENCE 'users_id_seq'
    CREATE TABLE users (
      id integer NOT NULL DEFAULT nextval('users_id_seq')
    );
  ```
- Define a default value for a column
  ``` SQL
    -- When creating a table

    CREATE TABLE users (
      deceased DEFAULT FALSE
    );

    -- When updating a table
    ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT value;
  ```
- Be able to describe what primary, foreign, natural, and surrogate keys are
  - A natural key is an existing value in dataset that uniquely identifies a
    row.
  - A surrogate key is a key created solely for the purpose of uniquely
    identifying a row in a dataset.
  - A primary key is a type of surrogate key used to uniquely identify each row
    of data in a dataset. When a primary key is specified in PostgreSQL using
    PRIMARY KEY, PostgreSQL will create an index to enforce uniqueness as well
    as preventing NULL values.

- Create and remove CHECK constraints from a column
  ``` SQL
    CREATE TABLE users (
      age integer CHECK (age > 0)
    );
  ```
- Create and remove foreign key constraints from a column

# Database Design

- Define cardinality and modality
- Be able to draw database diagrams using crow's foot notation

# Lesson Summaries

## Lesson 2 - Schema, Data, and SQL

- SQL is a special-purpose, declarative language used to manipulate the
  structure and values of datasets stored in a relational database.
- SQL is comprised of three sub-languages (DDL, DML, DCL)
  * DDL - data definition language
    - controls relation structure and rules
    - CREATE, DROP, ALTER
  * DML - data manipulation language
    - controls values stored within relations
    - SELECT, INSERT, UPDATE, DELETE
  * DCL - data control language
    - controls who can do what
    - GRANT
- SQL is made up of statements, which must be terminated by a semicolon
- PostgreSQL provides many data types including: varchar(length), text, integer,
  numeric, decimal(precision, scale), timestamp, date, boolean... etc.
- NULL is a special value that represents the absence of any other value
- NULL values must be compared using IS NULL or IS NOT NULL
- Database dumps can be loaded using `psql -d database\_name < file\_to\_import.sql`
- Table columns can have default values, which are specified using SET DEFAULT
- Table columns can be disallowed from storing NULL values using SET NOT NULL
- CHECK constraints are rules that must be met by the data stored in a table
- A natural key is an existing value in a dataset that can be used to uniquely
  identify each row of data in that dataset
- A surrogate key is a value that is created solely for the purpose of
  identifying a row of data in a database table
- A primary key is a value that is used to uniquely identify the rows in a
  table. It cannot be NULL and must be unique within a table. They are created
  using PRIMARY KEY
- serial columns are typically used to create auto-incrementing columns in
  PostgreSQL
- AS is used to rename tables and columns within a SQL statement

## Lesson 3 - Relational Data and JOINs

- Relational databases are called relational because they persist data in a set
  of relations, or, as they are more commonly called, tables.
- A relationship is a connection between entity instances, or rows of data,
  usually resulting from a relationship between what those rows of data
  represent
- The three levels of schema are conceptual, logical, and physical
- The three types of relationships are one-to-one, one-to-many, and many-to-many
- A conceptual schema is a high-level design focused on identifying entities and
  their relationships
- A physical schema is a low-level database-specific design focused on
  implementation
- Cardinality is the number of objects on each side of the relationship
- The modality of a relationship indicates if the relationship is required or
  not
- Referential integrity is a data property that requires every value in one
  column of a table to appear in a column of (usually) another table

## Lesson 4 - Optimizing SQL Queries

- How indexes can be used as part of database optimization
- Comparing the performance of SQL statements using EXPLAIN and EXPLAIN ANALYZE
- Using subqueries as an alternative to joins
