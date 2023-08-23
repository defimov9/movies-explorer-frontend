import { BACKEND_URL } from './constants';

class AuthApi {
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

  register(password, email, name) {
    return this._request(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ password, email, name }),
    });
  }

  login(password, email) {
    return this._request(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ password, email }),
    });
  }

  checkToken(token) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const authApi = new AuthApi({
  baseUrl: BACKEND_URL,
});
