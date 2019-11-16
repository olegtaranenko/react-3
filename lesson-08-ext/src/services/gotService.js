export default class GotService {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'
  }

  async getResource(url) {

    let response;
    let httpMessage = '';
    let error = null;
    try {
      response = await fetch(`${this._apiBase}/${url}`);
    } catch (e) {
      // console.dir(e);
      httpMessage = 'Internet disconnected';
    }

    if (httpMessage || !response.ok) {
      const randomized = Math.floor(Math.random() * 3) % 3;
      let randomCode = response && response.status;
      switch (randomized) {
        case 1:
          randomCode = 408;
          break;
        case 2:
          randomCode = 410;
      }

      if (!httpMessage) {
        httpMessage = `status: ${randomCode}`
      }
      const message = `Could not fetch ${url}, ${httpMessage}`;

      error = new Error(message);
      error.httpStatus = randomCode;

      throw error;
    }

    return await response.json();
  };

  async getAllCharacters(page = 3, pageSize = 10) {
    let resource = await this.getResource(`/characters?page=${page}&pageSize=${pageSize}`);
    return resource.map(this._transformCharacter);
  }

  async getCharacter(id) {
    let resource = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(resource);
  }


  async getAllHouses(page = 3, pageSize = 10) {
    let resource = await this.getResource(`/houses?page=${page}&pageSize=${pageSize}`);
    return resource.map(this._transformHouse);
  }

  async getHouse(id) {
    let resource = await this.getResource(`/houses/${id}`);
    return this._transformHouse(resource);
  }


  async getAllBooks(page = 3, pageSize = 10) {
    let resource = await this.getResource(`/books?page=${page}&pageSize=${pageSize}`);
    return resource.map(this._transformBook);
  }

  async getBook(id) {
    let resource = await this.getResource(`/books/${id}`);
    return this._transformHouse(resource);
  }


  _transformCharacter(char) {
    const {name, gender, born, died, culture} = char;
    return {name, gender, born, died, culture};
  }

  _transformHouse(house) {
    const {name, region, words, titles, overlord, ancestralWeapons} = house;
    return {name, region, words, titles, overlord, ancestralWeapons};
  }

  _transformBook(book) {
    const {name, numberOfPages, publisher, released} = book;
    return {name, numberOfPages, publisher, released};
  }
}

