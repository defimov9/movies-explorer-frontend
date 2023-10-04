import { BACKEND_URL, BEATFILM_URL } from './constants';

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((data) => {
      return Promise.reject(data.message);
    });
  }

  getUserData() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json',
      },
    });
  }

  updateUserInfo({ name, email }) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  createMovie(movie) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: BEATFILM_URL + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: this._baseUrl + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    });
  }

  deleteMovie(movieId) {
    return this._request(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json',
      },
    });
  }

  getSavedMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json',
      },
    });
  }
}

const mainApi = new MainApi({
  baseUrl: BACKEND_URL,
});

export default mainApi;
