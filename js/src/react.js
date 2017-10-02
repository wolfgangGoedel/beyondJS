import React from 'react';

class ToggleButton extends React.Component {
  state = { selected: false };

  clicked = () =>
    this.setState(
      ({ selected }) => ({ selected: !selected }),
      () => this.props.onChange && this.props.onChange(this.state.selected)
    );

  render() {
    const { props, state } = this;
    return (
      <button
        className={`btn btn-${props.type || 'default'} ${state.selected
          ? 'active'
          : ''}`}
        onClick={this.clicked}
      >
        {props.children}
      </button>
    );
  }
}

///////////////////////////////////

const SomeComponent = ({ doSomething }) => (
  <div>
    <ToggleButton type="primary" onChange={doSomething} />
  </div>
);
