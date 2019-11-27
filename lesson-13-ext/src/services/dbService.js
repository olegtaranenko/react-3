export default class DbService {

  constructor({port = 3004} = {}) {
    console.log(`DbService is set up to port: ${port}`);
    this._apiBase = `http://localhost:${port}`
  }

  async getResource(url) {
    const response = await fetch(`${this._apiBase}/${url}`);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }

    return await response.json();
  };

  getNumbers = async (url = 'numbers') => {
    return await this.getResource(url);
  };


  saveNumber = async (payload, url = 'numbers') => {
    return await fetch(`${this._apiBase}/${url}`, {
      method:  'POST',
      body:    JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}