import {buildAnUrl} from '../shared-functions'

export default class ShopService {

  constructor({port = 3001} = {}) {
    // this._apiBase = process.env.API_URL;
    // console.log(this._apiBase);
    this._apiBase = `http://localhost:${port}`
  }

  getUrl = (url, ...params) => {
    return buildAnUrl(url, this._apiBase, ...params);
  };

  async getResource(url, ...params) {
    const response = await fetch(this.getUrl(url, ...params));

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    }

    return await response.json();
  };


  async postResource(url, payload) {

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Could not post ${url}, status: ${response.status}`)
    }

    return await response.json();
  };


  getSection = async ({section = 'coffee', filterBy = '', filterPayload = '', page = 0, contentRequested} = {}) => {
    if (contentRequested) {
      contentRequested(section);
    }

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
        default:
        //nothing
      }
      params.push(`${paramField}${fieldSuffix}=${filterPayload}`);
    }

    const resource = await this.getResource(section, ...params);
    return resource.map(this._transformItem);
  };

  getItem = async ({id, section = 'coffee', contentRequested}) => {

    const urlPath = `${section}/${id}`;
    if (contentRequested) {
      contentRequested(urlPath);
    }
    return await this.getResource(urlPath)
  };

  saveMessage = async ({
    payload, contentRequested, success, failure
  }) => {
    const section = 'contacts';
    contentRequested && contentRequested(section);

    const url = this.getUrl(section);
    // returns created object from db
    try {
      const response = await this.postResource(url, payload);

      if (!response.id) {
        failure && failure(url, response);
      } else {
        success && success(url, response);
      }
    } catch (e) {
      failure && failure(`Can't save message to the ${url}`);
    }
  };

  _transformItem(item) {
    return item
  }
}
