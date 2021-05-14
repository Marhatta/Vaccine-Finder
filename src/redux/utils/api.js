import axios from 'axios';

export const getData = (url, headers) => {
  let options = {
    method: 'GET',
    headers: headers
      ? {'content-type': 'application/json', ...headers}
      : {'content-type': 'application/json'},
    url,
  };
  return axios(options)
    .then(response => response.data)
    .catch(error => {});
};
