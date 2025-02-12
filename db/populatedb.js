#! /usr/bin/env node

const { Client } = require("pg");
require('dotenv').config()
const SQL = `
-- Create the database

-- Table: authors
CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL,
    country VARCHAR(100),
    birth_year INT
);

-- Table: games
CREATE TABLE games (
    game_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    author_id INT,
    release_year INT,
    price NUMERIC(10, 2),
    FOREIGN KEY (author_id) REFERENCES authors(author_id) ON DELETE SET NULL
);

-- Table: game_details
CREATE TABLE game_details (
    detail_id SERIAL PRIMARY KEY,
    game_id INT,
    platform VARCHAR(100),
    genre VARCHAR(100),
    rating NUMERIC(3, 1) CHECK (rating >= 0 AND rating <= 10),
    description TEXT,
    FOREIGN KEY (game_id) REFERENCES games(game_id) ON DELETE CASCADE
);

-- Table: game_years
CREATE TABLE game_years (
    game_year_id SERIAL PRIMARY KEY,
    game_id INT,
    development_year INT,
    FOREIGN KEY (game_id) REFERENCES games(game_id) ON DELETE CASCADE
);

-- Insert sample data into authors
INSERT INTO authors (author_name, country, birth_year) VALUES
('John Smith', 'USA', 1975),
('Miyamoto Shigeru', 'Japan', 1952),
('Jane Doe', 'Canada', 1985);

-- Insert sample data into games
INSERT INTO games (name, author_id, release_year, price) VALUES
('Adventure Quest', 1, 2015, 29.99),
('Super Platformer', 2, 1985, 49.99),
('Mystic Lands', 3, 2022, 59.99);

-- Insert sample data into game_details
INSERT INTO game_details (game_id, platform, genre, rating, description) VALUES
(1, 'PC', 'RPG', 8.5, 'A thrilling role-playing adventure set in a fantasy world.'),
(2, 'NES', 'Platformer', 9.0, 'A classic platformer that defined the genre.'),
(3, 'PC, PS5', 'Open World', 8.8, 'Explore vast lands filled with magic and mystery.');

-- Insert sample data into game_years
INSERT INTO game_years (game_id, development_year) VALUES
(1, 2013),
(1, 2014),
(2, 1984),
(3, 2020),
(3, 2021);

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
