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
    .then(response => {
      if (url.includes('https://api.twitter.com/2/tweets/search/recent')) {
        return response;
      } else {
        return response.data;
      }
    })
    .catch(error => {});
};
