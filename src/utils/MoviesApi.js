import { BEATFILM_URL } from './constants';

class MoviesApi {
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

  getMovies() {
    return this._request(`${this._baseUrl}/beatfilm-movies`, {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }
}

const moviesApi = new MoviesApi({
  baseUrl: BEATFILM_URL,
});

export default moviesApi;
