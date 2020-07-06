export default () => {
  // bad !!!
  return document.querySelector('input');

  //bad
  return axios.get('/posts');

  //good
  return state + action;
}