import axios from 'axios';

const url = 'http://localhost:1337';

export function getBy(from, to) {
  return new Promise((resolve, reject) => {
    axios.get(`${url}?from=${from}&to=${to}`)
            .then((res) => {
              let tab = [];
              if (res.data.length === 0) {
                tab.push({});
              } else {
                tab = res.data;
              }
              resolve(tab);
            })
            .catch((err) => {
              reject(err.response.status);
            });
  });
}

export function getOne(id) {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/${id}`).then(res => resolve(res.data)).catch(err => reject(err.response.status));
  });
}
