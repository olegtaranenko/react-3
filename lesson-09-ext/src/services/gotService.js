export default class GotService {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api'
  }

  async getResource(url) {
    const response = await fetch(`${this._apiBase}/${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }

    return await response.json();
  };

  async getAllCharacters(page = 5, pageSize = 10) {
    let resource = await this.getResource(`characters?page=${page}&pageSize=${pageSize}`);
    return resource.map(this._transformCharacter);
  }

  async getCharacter(id) {
    let resource = await this.getResource(`characters/${id}`);
    return this._transformCharacter(resource);
  }


  async getAllHouses(page = 3, pageSize = 10) {
    let resource = await this.getResource(`houses?page=${page}&pageSize=${pageSize}`);
    return resource.map(this._transformHouse);
  }

  async getHouse(id) {
    let resource = await this.getResource(`houses/${id}`);
    return this._transformHouse(resource);
  }


  async getAllBooks(page = 3, pageSize = 10) {
    let resource = await this.getResource(`books?page=${page}&pageSize=${pageSize}`);
    return resource.map(this._transformBook);
  }

  async getBook(id) {
    let resource = await this.getResource(`books/${id}`);
    return this._transformHouse(resource);
  }

  _transformCharacter(char) {
    let {name, gender, born, died, culture, url} = char;
    const key = _extractKey(url);
    // const key = this._extractKey(url);


    name = this.checkNonEmpty(name);
    gender = this.checkNonEmpty(gender);
    born = this.checkNonEmpty(born);
    died = this.checkNonEmpty(died);
    culture = this.checkNonEmpty(culture);

    return {name, gender, born, died, culture, key};
  }

  _transformHouse(house) {
    const {name, region, words, titles, overlord, ancestralWeapons, url} = house;
    const key = _extractKey(url);
    // const key = this._extractKey(url);
    return {name, region, words, titles, overlord, ancestralWeapons, key};
  }

  _transformBook(book) {
    const {name, numberOfPages, publisher, released, url} = book;
    const key = _extractKey(url);
    // const key = this._extractKey(url);
    return {name, numberOfPages, publisher, released, key};
  }

  checkNonEmpty = (value) => {
    return (value === '') ?  'oop\'s... no data' : value;
  }

/*
  _extractKey = (url) => {
    const defaultKey = null;
    const matched = url.match(/\d+$/);

    let ret = defaultKey;
    if (matched && matched[0]) {
      ret = parseInt(matched[0]);
      if (isNaN(ret)) {
        ret = defaultKey;
      }
    }

    return ret;
  }
*/
}


// Почему то возвращается
function _extractKey(url) {
  const defaultKey = null;
  const matched = url.match(/\d+$/);

  let ret = defaultKey;
  if (matched && matched[0]) {
    ret = parseInt(matched[0]);
    if (isNaN(ret)) {
      ret = defaultKey;
    }
  }

  return ret;
}

