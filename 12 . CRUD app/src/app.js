import {
  http
} from './easyHttp';

document.addEventListener('DOMContentLoaded', getPosts);

function getPosts() {
  http.getData('http://localhost:3000/posts')
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
}