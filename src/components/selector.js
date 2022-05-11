import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "../static/css/selector.css";

const max = 15;

class Selector extends React.Component {

	state = {
		count: 1
	}

	// this section was taken from https://stackoverflow.com/questions/60289140/react-click-counter-updating-state-of-just-one-element
	add = () => {
		if (this.state.count + 1 > max) {
			this.setState(prev => ({count: max}))
		}
		else {
			this.setState(prev => ({count: prev.count + 1}))
		}
	}
	sub = () => {
		if (this.state.count - 1 < 1) {
			this.setState(prev => ({count: 1}))
		}
		else {
			this.setState(prev => ({count: prev.count - 1}))
		}
	}

	render() {
		return (
			<div className="background">
				<button onClick={this.sub} className="buttonMinus">-</button>
				<p className="counterText">{this.state.count}</p>
				<button onClick={this.add} className="buttonAdd">+</button>
			</div>
		);
	}
}

export { Selector }