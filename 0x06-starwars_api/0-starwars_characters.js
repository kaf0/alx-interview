const axios = require('axios');

function getMovieCharacters(movieId) {
  const url = `https://swapi.dev/api/films/${movieId}/`;
  
  return axios.get(url)
    .then(response => {
      const characterUrls = response.data.characters;
      const characterPromises = characterUrls.map(characterUrl => axios.get(characterUrl));
      
      return Promise.all(characterPromises)
        .then(characterResponses => {
          const characterNames = characterResponses.map(characterResponse => characterResponse.data.name);
          return characterNames;
        })
        .catch(error => {
          console.error("Error fetching character data:", error);
          return [];
        });
    })
    .catch(error => {
      console.error("Error fetching movie data:", error);
      return [];
    });
}

if (process.argv.length !== 3) {
  console.error("Usage: node 0-starwars_characters.js <movie_id>");
  process.exit(1);
}

const movieId = process.argv[2];
getMovieCharacters(movieId)
  .then(characterNames => {
    characterNames.forEach(name => {
      console.log(name);
    });
  });

