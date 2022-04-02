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

  handleDecriment = () => {
    this.setState((state) => {
      if (state.currentValue === 0) {
        return {
          currentValue: state.currentValue,
        };
      } else {
        return {
          currentValue: state.currentValue - 1,
        };
      }
    });
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
    console.log(this.state.parityType);
    return (
      <CounterView
        currentValue={this.state.currentValue}
        onDecriment={this.handleDecriment}
        onIncrement={this.handleIncrement}
        onReset={this.handleReset}
        numberType={this.state.parityType}
      />
    );
  }
}
