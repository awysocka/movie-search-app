const axios = require('axios');

exports.handler = async function (event) {
  const { q, page } = event.queryStringParameters;
  const MOVIE_API_KEY = process.env.MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_API_KEY}&language=en-US&page=${page}&include_adult=false&query=${q}`;

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
