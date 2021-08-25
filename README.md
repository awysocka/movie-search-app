# movie search app
This is web application to search movies. It uses the [TMDb API](https://www.themoviedb.org/documentation/api). 

![movie search app mockup](https://github.com/awysocka/movie-search-app/blob/master/readme-img/movie-search-app-mockup.jpg)

## technologies
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Styled with [Styled Components](https://styled-components.com/).
* Deployed on [Netlify](https://www.netlify.com/) and uses Netlify function to hide API key.

## local setup

1. Clone this repository
  ```bash
  $ git clone https://github.com/awysocka/movie-search-app.git
  ```
2. Go into the repository
  ```bash
  $ cd movie-search-app
  ```
3. Instal dependencies
  ```bash
  $ npm install
  ```
4. Register and get your free personal API key: [www.themoviedb.org](https://www.themoviedb.org/)

5. Create .env file in project root directory, paste the code below and set your API key
  ```
  MOVIE_API_KEY='ENTER YOUR API KEY'
  ```
6. Instal Netlify CLI
  ```bash
  $ npm install netlify-cli -g
  ```
7. Run a local development environment
  ```bash
  $ netlify dev
  ```

## live
* Here is a working website: https://movie-search-aw.netlify.app/.

## status
* in progress
