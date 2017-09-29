const ADD = 'ADD';
const SUB = 'SUB';
const RESET = 'RESET';

export const add = val => ({ type: ADD, val });
export const sub = val => ({ type: SUB, val });
export const reset = () => ({ type: RESET });

const initialState = {
  counter: 0,
  other: 'toto'
};

export const reducer = (state = initialState, action) => {
  const { counter } = state;
  switch (action.type) {
    case ADD:
      return { ...state, counter: counter + action.val };
    case SUB:
      return { ...state, counter: counter - action.val };
    case RESET:
      return { ...state, counter: initialState.counter };
    default:
      return state;
  }
};

/****************************************/

store.dispatch(add(42));
store.dispatch(sub('toto'));
