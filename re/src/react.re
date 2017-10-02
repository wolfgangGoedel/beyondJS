module ToggleButton = {
  type actions =
    | Toggle;
  type state = {selected: bool};
  let initialState () => {selected: false};
  let reducer action state =>
    switch action {
    | Toggle => ReasonReact.Update {selected: not state.selected}
    };
  let component = ReasonReact.reducerComponent "ToggleButton";
  let make ::displayType children => {
    ...component,
    initialState,
    reducer,
    render: fun _self => {
      let className = "btn btn-" ^ displayType;
      <button className> children </button>
    }
  };
};

module SomeComponent = {
  let component = ReasonReact.statelessComponent "SomeComponent";
  let make ::doSomething _ => {
    ...component,
    render: fun _ =>
      <div>
        <ToggleButton displayType="primary"> ReasonReact.stringToElement "click me" </ToggleButton>
      </div>
  };
};
