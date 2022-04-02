import { Component } from "react";
import HomeView from "../Components/HomeView";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../../../Routes/Routes";

export default class CounterContainer extends Component {
  render() {
    return <HomeView handleCounter={this.handleCounter} />;
  }
}
