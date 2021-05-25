import axios from 'axios';
import {showToast} from '../../components/utils/toast';

export const getData = (url, headers) => {
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
      if (url.includes('https://api.twitter.com/')) {
        return response;
      } else {
        return response.data;
      }
    })
    .catch(error => {
      showToast('Something went wrong. Please try again');
    });
};

export const postData = (url, data, headers, hasFormData) => {
  let options = {
    method: 'POST',
    headers: headers ? headers : {'content-type': 'application/json'},
    url,
    data: hasFormData ? data : JSON.stringify(data),
  };
  return axios(options)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      const {statusCode} = error.response.data;
      if (statusCode === 400) {
        return error.response.data;
      } else {
        showToast('Something went wrong. Please try again');
      }
    });
};
