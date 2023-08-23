import { BACKEND_URL } from './constants';

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
    return Promise.reject(`Ошибка: ${res.status}`);
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

  createMovie(movieData) {
    return this._request(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        ...movieData,
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

export const mainApi = new MainApi({
  baseUrl: BACKEND_URL,
});
