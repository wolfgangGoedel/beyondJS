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

let reducer ::state=initialState ::action => {
  let {counter} = state;
  switch action {
  | Add value => {...state, counter: counter + value}
  | Sub value => {...state, counter: counter - value}
  | Reset => {...state, counter: initialState.counter}
  | _ => state
  }
};

type store 'state 'action;

external store : store 'state 'action = "" [@@bs.val];

external dispatch : 'a => unit = "" [@@bs.send.pipe : store 's 'a];

dispatch (Add 42) store;
