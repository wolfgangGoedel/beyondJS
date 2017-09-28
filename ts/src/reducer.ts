export type State = {
  counter: number;
  other: string;
};

type Add = { type: 'ADD'; val: number };
type Sub = { type: 'SUB'; val: number };
type Reset = { type: 'RESET' };

export type Action = Add | Sub | Reset;

const initialState: State = {
  counter: 0,
  other: 'toto'
};

export const reducer = (state = initialState, action: Action): State => {
  const { counter } = state;
  switch (action.type) {
    case 'ADD':
      return {...state, counter: counter + action.val};
    case 'SUB':
      return {...state, counter: counter - action.val};
    case 'RESET':
      return {...state, counter: initialState.counter};
    default:
      return state;
  }
}

declare var store: { dispatch: (action: Action) => void };

store.dispatch({ type: 'ADD', val: 42 });