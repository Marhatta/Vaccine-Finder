import axios from 'axios';

export const getData = (url, headers) => {
  console.log(url);
  let options = {
    method: 'GET',
    headers: headers
      ? headers
      : {
          'content-type': 'application/json',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36',
        },
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
