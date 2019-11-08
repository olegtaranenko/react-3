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

  getAllCharacters(page = 3, pageSize = 10) {
    return this.getResource(`/characters?page=${page}&pageSize=${pageSize}`);
  }

  getCharacter(id) {
    return this.getResource(`/characters/${id}`);
  }
  
  
  getAllHouses(page = 3, pageSize = 10) {
    return this.getResource(`/houses?page=${page}&pageSize=${pageSize}`);
  }

  getHouse(id) {
    return this.getResource(`/houses/${id}`);
  }
  

  getAllBooks(page = 3, pageSize = 10) {
    return this.getResource(`/books?page=${page}&pageSize=${pageSize}`);
  }

  getBook(id) {
    return this.getResource(`/books/${id}`);
  }
  

}

