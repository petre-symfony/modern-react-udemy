export default (state, action) => {
  // bad !!! all of them
  state[0] = 'Sam';
  state.pop()
  state.push();

  // bad !!! all of them
  state.name = 'Sam';
  state.age = 30;
}