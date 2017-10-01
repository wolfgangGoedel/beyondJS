type state = {
  counter: int,
  other: string
};

type action =
  | Add int
  | Sub int
  | Reset
  | Init;

let initialState = {counter: 0, other: "toto"};

let reducer ::state=initialState ::action =>
  switch (action, state.counter) {
  | (Add value, c) => {...state, counter: c + value}
  | (Sub value, c) when c >= value => {...state, counter: c - value}
  | (Sub value, c) when c < value => {...state, counter: 0}
  | (Reset, _) => {...state, counter: initialState.counter}
  | _ => state
  };

type store 'state 'action;

external store : store 'state 'action = "" [@@bs.val];

external dispatch : 'a => unit = "" [@@bs.send.pipe : store 's 'a];

dispatch (Add 42) store;
