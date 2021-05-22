import axios from 'axios';

export const getData = (url, headers) => {
  console.log(url);
  let options = {
    method: 'GET',
    headers: headers ? headers : {'content-type': 'application/json'},
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
    .catch(error => {
      console.log('=========response error=========', error);
    });
};
