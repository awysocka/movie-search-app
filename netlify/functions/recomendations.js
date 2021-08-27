const axios = require('axios');

exports.handler = async function (event) {
  const id = event.path.substring(35);
  const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${MOVIE_API_KEY}&language=en-US&page=1`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.toString(),
    };
  }
};
