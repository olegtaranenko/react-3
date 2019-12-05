export default class ShopService {

  constructor({port = 3001} = {}) {
    this._apiBase = `http://localhost:${port}`
  }

  async getResource(url) {
    const response = await fetch(`${this._apiBase}/${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }

    return await response.json();
  };


  async postResource(url, payload) {
    const response = await fetch(url, {
      method:  'POST',
      body:    JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Could not post ${url}, status: ${response.status}`)
    }

    return await response.json();
  };


  getSection = async (section = 'coffee', page = 1) => {
    let resource = await this.getResource(`${section}?page=${page}`);
    return resource.map(this._transformItem);
  };

  getItem = async (id, section = 'coffee') => {
    return await this.getResource(`${section}/${id}`)
  };

  getGood = async (id) => {
    return await this.getItem(id, 'goods');
  };


  saveCart = async (...items) => {
    const payload = {
      items: [...items]
    };
    const url = `${this._apiBase}/cart`;
    return await this.postResource(url, payload);

  };

  _transformItem(item) {
    return item
  }
}
