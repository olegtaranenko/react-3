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

  getAllCharacters = async (page = 5, pageSize = 10) => {
    let resource = await this.getResource(`characters?page=${page}&pageSize=${pageSize}`);
    return resource.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    let resource = await this.getResource(`characters/${id}`);
    return this._transformCharacter(resource);
  };


  getAllHouses = async (page = 3, pageSize = 10) => {
    let resource = await this.getResource(`houses?page=${page}&pageSize=${pageSize}`);
    return resource.map(this._transformHouse);
  };

  getHouse = async (id) => {
    let resource = await this.getResource(`houses/${id}`);
    return this._transformHouse(resource);
  };


  getAllBooks = async () => {
    let resource = await this.getResource(`books`);
    return resource.map(this._transformBook);
  };

  getBook = async (id) => {
    let resource = await this.getResource(`books/${id}`);
    return this._transformHouse(resource);
  };

  _transformCharacter(char) {
    let {name, gender, born, died, culture, url} = char;
    const key = _extractKey(url);
    // const key = this._extractKey(url);


    name = checkNonEmpty(name);
    gender = checkNonEmpty(gender);
    born = checkNonEmpty(born);
    died = checkNonEmpty(died);
    culture = checkNonEmpty(culture);

    return {name, gender, born, died, culture, key};
  }

  _transformHouse(house) {
    let {name, region, words, titles, overlord, ancestralWeapons, url} = house;

    name = checkNonEmpty(name);
    region = checkNonEmpty(region);
    words = checkNonEmpty(words);
    titles = checkNonEmpty(titles);
    overlord = checkNonEmpty(overlord);
    ancestralWeapons = checkNonEmpty(ancestralWeapons);

    const key = _extractKey(url);
    // const key = this._extractKey(url);
    return {name, region, words, titles, overlord, ancestralWeapons, key};
  }

  _transformBook(book) {
    let {name, numberOfPages, publisher, released, url} = book;

    name = checkNonEmpty(name);
    numberOfPages = checkNonEmpty(numberOfPages);
    publisher = checkNonEmpty(publisher);
    released = checkNonEmpty(released);

    const key = _extractKey(url);
    // const key = this._extractKey(url);
    return {name, numberOfPages, publisher, released, key};
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

function checkNonEmpty(value) {
  return (value === '') ? 'oop\'s... no data' : value;
}

