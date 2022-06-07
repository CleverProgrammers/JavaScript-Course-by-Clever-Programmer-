console.log("YOOO")
var firstName = 'Nazariy'
let apiUrl = 'http://localhost:3000'
if (location.href.indexOf('netlify') != -1) {
  apiUrl = 'https://netflix-cp.herokuapp.com'
}

// Called whe the page is loaded
window.onload = () => {
  getOriginals()
  getTrendingNow()
  getTopRated()
  getWishList()
  getGenres()
  letVarExample()
}

function getWishList() {
  fetch(`${apiUrl}/wishlist`, {
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => {
      showMovies(data, '#wishlist', 'backdrop_path')
    })
    .catch(error_data => {
      logOut()
      console.log(error_data)
    })
}

function letVarExample(firstName = 'Nazariy') {
  // Melissas Address
  const address = {
    street: '9879 Test rd.',
    city: 'Brooklyn',
    state: 'NY',
  }

  // address.state = "MI";

  // let state = address.state;
  // state = "MI"
  // console.log(address);

  // let address2 = address;
  // address2.state = "MI";

  // let address2 = {
  //     ...address,
  //     apartment: "MI"
  // }

  // let { street, city, state } = address;

  // console.log(street + city + state);
}

async function getMovieTrailer(id) {
  var url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  return await fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('something went wrong')
    }
  })
}

const setTrailer = trailers => {
  const iframe = document.getElementById('movieTrailer')
  const movieNotFound = document.querySelector('.movieNotFound')
  if (trailers.length > 0) {
    movieNotFound.classList.add('d-none')
    iframe.classList.remove('d-none')
    iframe.src = `https://www.youtube.com/embed/${trailers[0].key}`
  } else {
    iframe.classList.add('d-none')
    movieNotFound.classList.remove('d-none')
  }
}

const handleMovieSelection = e => {
  const id = e.target.getAttribute('data-id')
  const iframe = document.getElementById('movieTrailer')
  // here we need the id of the movie
  getMovieTrailer(id).then(data => {
    const results = data.results
    const youtubeTrailers = results.filter(result => {
      if (result.site == 'YouTube' && result.type == 'Trailer') {
        return true
      } else {
        return false
      }
    })
    setTrailer(youtubeTrailers)
  })

  // open modal
  $('#trailerModal').modal('show')
  // we need to call the api with the ID
}

showMovies = (movies, element_selector, path_type) => {
  var moviesEl = document.querySelector(element_selector)
  for (var movie of movies.results) {
    var imageElement = document.createElement('img')
    imageElement.setAttribute('data-id', movie.id)

    imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`

    imageElement.addEventListener('click', e => {
      handleMovieSelection(e)
    })
    moviesEl.appendChild(imageElement)
  }
}

function fetchMoviesBasedOnGenre(genreId) {
  var url = 'https://api.themoviedb.org/3/discover/movie?'
  url +=
    'api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
  url += `&with_genres=${genreId}`
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('something went wrong')
    }
  }) // returns a promise already
}

function fetchMovies(url, element_selector, path_type) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => {
      showMovies(data, element_selector, path_type)
    })
    .catch(error_data => {
      console.log(error_data)
    })
}

function showMoviesGenres(genres) {
  genres.genres.forEach(function (genre) {
    // get list of movies
    var movies = fetchMoviesBasedOnGenre(genre.id)
    movies
      .then(function (movies) {
        showMoviesBasedOnGenre(genre.name, movies)
      })
      .catch(function (error) {
        console.log('BAD BAD', error)
      })
    // show movies based on genre
  })
}

function showMoviesBasedOnGenre(genreName, movies) {
  let allMovies = document.querySelector('.movies')
  let genreEl = document.createElement('div')
  genreEl.classList.add('movies__header')
  genreEl.innerHTML = `
        <h2>${genreName}</h2>
    `
  let moviesEl = document.createElement('div')
  moviesEl.classList.add('movies__container')
  moviesEl.setAttribute('id', genreName)

  for (var movie of movies.results) {
    var imageElement = document.createElement('img')
    let { backdrop_path, id } = movie
    console.log('TESTING DESCONSTRUCT:', id, backdrop_path)
    imageElement.setAttribute('data-id', id)

    imageElement.src = `https://image.tmdb.org/t/p/original${backdrop_path}`

    imageElement.addEventListener('click', e => {
      handleMovieSelection(e)
    })
    moviesEl.appendChild(imageElement)
  }

  allMovies.appendChild(genreEl)
  allMovies.appendChild(moviesEl)
}

function getGenres() {
  var url =
    'https://api.themoviedb.org/3/genre/movie/list?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US'
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('something went wrong')
      }
    })
    .then(data => {
      showMoviesGenres(data)
    })
    .catch(error_data => {
      console.log(error_data)
    })
}

function getOriginals() {
  var url =
    'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  fetchMovies(url, '.original__movies', 'poster_path')
}

function getTrendingNow() {
  var url =
    'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  fetchMovies(url, '#trending', 'backdrop_path')
}

function getTopRated() {
  var url =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1'
  fetchMovies(url, '#top_rated', 'backdrop_path')
}

// Loop through list of genres
//     Show genres in HTML
//     Fetch movies based on genre fetchMovies(url, genre, classInHTML)
//     Display the list of movies

// https://api.themoviedb.org/3/discover/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28

// Movies genres
// https://api.themoviedb.org/3/genre/movie/list?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US
