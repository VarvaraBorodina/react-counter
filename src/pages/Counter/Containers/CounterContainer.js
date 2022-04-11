import { Component } from "react";
import CounterView from "../Components/CounterView";

export default class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentValue: 0,
      parityType: "even",
    };
  }

  componentDidUpdate(_, prevState) {
    if (prevState.currentValue !== this.state.currentValue) {
      const parityType = this.state.currentValue % 2 === 0 ? "even" : "odd";
      this.setState({ parityType });
    }
  }

  handleDecrement = () => {
    if (this.state.currentValue > 0) {
      this.setState(({ currentValue }) => ({
        currentValue: this.state.currentValue - 1,
      }));
    }
  };

  handleIncrement = () => {
    this.setState((state) => {
      return {
        currentValue: state.currentValue + 1,
      };
    });
  };

  handleReset = () => {
    this.setState({ currentValue: 0 });
  };

  render() {
    return (
      <CounterView
        currentValue={this.state.currentValue}
        onDecrement={this.handleDecrement}
        onIncrement={this.handleIncrement}
        onReset={this.handleReset}
        numberType={this.state.parityType}
      />
    );
  }
}
