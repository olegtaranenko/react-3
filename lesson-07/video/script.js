////////////////////////////////////
// simple GET
/*
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
  // console.log(response.json());
  return response.json()
})
.then(json => console.log(json));
*/

////////////////////////////////////
// simple POST
/*
let url = 'https://jsonplaceholder.typicode.com/posts',
  data = {username: 'example'};

fetch(url, {
  method:  'post',
  body:    JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(json => console.log('Success', json))
  .catch(error => console.error('Error', error));

*/


////////////////////////////////////
// async/ await
/*
let url = 'https://jsonplaceholder.typicode.com/posts/1';
const getResource = async url => {
  const response = await fetch(url),
    some = await response.json();

  return some;
};

getResource(url)
.then(res => console.log('Success', res))
.catch(error => console.error('Error', error));

*/


////////////////////////////////////
// async/ await error handling
/*
let url = 'https://jsonplaceholder.typicode.com/posts/10000';
const getResource = async url => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status: ${response.status}`)
  }

  return await response.json();
};

getResource(url)
.then(res => console.log('Success', res))
.catch(error => console.error('Error', error));
*/


class GotService {

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

const got = new GotService();

got.getAllCharacters(4)
.then(res => console.log(res.forEach(chararcter => console.log(chararcter.name) )));

got.getCharachter(130)
.then(res => console.log(res));
