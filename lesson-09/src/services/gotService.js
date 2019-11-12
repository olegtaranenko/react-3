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

