#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const movieUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;
let characters = [];

request(movieUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    characters = JSON.parse(body).characters;
    getCharacter(0);
  }
});

const getCharacter = (index) => {
  if (index === characters.length) return;
  request(characters[index], (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      const name = JSON.parse(body).name;
      console.log(name);
      getCharacter(index + 1);
    }
  });
};
