const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];
  const getState = () => JSON.parse(JSON.stringify(state));
  const dispatch = (aciton) => {
    state = reducer(state, aciton);
    listeners.forEach((item) => item());
  };
  dispatch({});
  const subScribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((item) => item !== listener);
    };
  };
  return {
    getState,
    dispatch,
    subScribe,
  };
};
