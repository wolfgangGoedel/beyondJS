import * as React from 'react';

interface ToggleButtonProps {
  type?: 'primary' | 'secondary' | 'warning' | 'danger' | 'default';
  onChange?: (selected: boolean) => void;
}

class ToggleButton extends React.Component<
  ToggleButtonProps,
  { selected: boolean }
> {
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

const SomeComponent: React.StatelessComponent<{ doSomething: any }> = ({
  doSomething
}) => (
  <div>
    <ToggleButton type="primary" onChange={doSomething} />
  </div>
);
