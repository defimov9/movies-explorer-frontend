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
    return res.json().then((data) => {
      return Promise.reject(data.message);
    });
  }

  register(password, email, name) {
    return this._request(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ password, email, name }),
    });
  }

  login(email, password) {
    return this._request(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ email, password }),
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

const authApi = new AuthApi({
  baseUrl: BACKEND_URL,
});

export default authApi;
