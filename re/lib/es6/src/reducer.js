// Generated by BUCKLESCRIPT VERSION 1.9.2, PLEASE EDIT WITH CARE
'use strict';

import * as Block from "bs-platform/lib/es6/block.js";

var initialState = /* record */[
  /* counter */0,
  /* other */"toto"
];

function reducer($staropt$star, action) {
  var state = $staropt$star ? $staropt$star[0] : initialState;
  var match = state[/* counter */0];
  if (typeof action === "number") {
    if (action) {
      return state;
    } else {
      return /* record */[
              /* counter */0,
              /* other */state[/* other */1]
            ];
    }
  } else if (action.tag) {
    var value = action[0];
    if (match >= value) {
      return /* record */[
              /* counter */match - value | 0,
              /* other */state[/* other */1]
            ];
    } else if (match < value) {
      return /* record */[
              /* counter */0,
              /* other */state[/* other */1]
            ];
    } else {
      return state;
    }
  } else {
    return /* record */[
            /* counter */match + action[0] | 0,
            /* other */state[/* other */1]
          ];
  }
}

store.dispatch(/* Add */Block.__(0, [42]));

export {
  initialState ,
  reducer      ,
  
}
/*  Not a pure module */
