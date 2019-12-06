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
    debugger;
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


  getSection = async (section = 'coffee', filterBy = '', filterPayload = '', page = 0) => {

    const params = [];
    if (page) {
      params.push(`page=${page}`);
    }
    if (filterBy && filterBy.length && filterPayload && filterPayload.length) {
      let paramField = '',
        fieldSuffix = '';

      switch (filterBy) {
        case 'like':
        case 'search':
          paramField = `name`;
          fieldSuffix = '_like';
          break;
        case 'country':
          paramField = `country`;
          break;
      }
      params.push(`${paramField}${fieldSuffix}=${filterPayload}`);
    }

    let url = section;
    if (params.length) {
      url += '?' + params.join('&');
    }

    let resource = await this.getResource(`${url}`);
    return resource.map(this._transformItem);
  };

  getItem = async (id, section = 'coffee') => {
    return await this.getResource(`${section}/${id}`)
  };

  getGood = async (id) => {
    return await this.getItem(id, 'goods');
  };


  saveMessage = async (payload) => {
    const url = `${this._apiBase}/contacts`;
    return await this.postResource(url, payload);

  };

  _transformItem(item) {
    return item
  }
}
