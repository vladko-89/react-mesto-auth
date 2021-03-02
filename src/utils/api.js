class Api {
  constructor() {
    this._base = 'https://mesto.nomoreparties.co/v1/cohort-19/';
    this._token = '11f304a7-0c18-4e6f-ac0a-f5def34dbfe2';
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._base}users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  editUserInfo(data) {
    return fetch(`${this._base}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._checkResponse)
  }

  updateAvatar(link) {
    return fetch(`${this._base}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link,
      })
    })
      .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(`${this._base}cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkResponse)
  }

  addNewCard(data) {
    return fetch(`${this._base}cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._checkResponse)
  }

  deleteCard(cardID) {
    return fetch(`${this._base}cards/${cardID}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  putLike(cardID) {
    return fetch(`${this._base}cards/likes/${cardID}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      }
    })
      .then(this._checkResponse)
  }

  deleteLike(cardID, status) {
    if (status) {
      return fetch(`${this._base}cards/likes/${cardID}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-type': 'application/json'
        }
      })
        .then(this._checkResponse)
    }
  }

  changeLikeCardStatus(cardID, status) {
    if (status) {
      return fetch(`${this._base}cards/likes/${cardID}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
          'Content-type': 'application/json'
        }
      })
        .then(this._checkResponse)
    }
    else {
      return fetch(`${this._base}cards/likes/${cardID}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
          'Content-type': 'application/json'
        }
      })
        .then(this._checkResponse)
    }
  }
}

const api = new Api();

export default api;