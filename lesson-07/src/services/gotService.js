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

  getAllCharacters(page = 3, pageSize = 20) {
    return this.getResource(`/characters?page=${page}&pageSize=${pageSize}`);
  }

  getCharachter(id) {
    return this.getResource(`/characters/${id}`);
  }
}

