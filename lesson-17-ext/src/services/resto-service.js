export default class RestoService {

  constructor({port = 3004} = {}) {
    console.log(`RestoService is set up to port: ${port}`);
    this._apiBase = `http://localhost:${port}`
  }

  async getResource(url) {
    const response = await fetch(`${this._apiBase}/${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }

    return await response.json();
  };


  saveCart = async (...items) => {
    const cart = {
      items: [...items]
    };
    const url = `${this._apiBase}/cart`;

    return await fetch(url, {
      method:  'POST',
      body:    JSON.stringify(cart),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  getMenuItems = async (page = 1) => {
    let resource = await this.getResource(`menu?page=${page}`);
    return resource.map(this._transformMenuItem)
  };

  _transformMenuItem(item) {
    return item
  }
}
