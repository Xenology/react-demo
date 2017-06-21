let html = (<h1>Hello, Beatport</h1>);

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
			color: 'red'
		};
	}

	render() {
		return(
			<div>
				<h1>Hello, Beatport</h1>
				<h2> The current count is { this.state.count }</h2>
				<span><button onClick={ this.increment.bind(this) }>Add</button></span>
				<span><button onClick={ this.decrement.bind(this) }>Remove</button></span>
				<span><button onClick={ this.changeColor.bind(this) }>Change Box Color</button></span>
				<hr />
				<Box color={ this.state.color } />
			</div>
		)
	}

	increment() {
		this.setState((prevState) => {
			return {
				count: prevState.count += 1
			}
		});
	}

	decrement() {
		this.setState((prevState) => {
			return {
				count: prevState.count -= 1
			}
		});
	}

	changeColor() {
		this.setState((prevState) => {
			return {
				color: this.getRandomColor()
			}
		});
	}

	getRandomColor() {
	  return '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
	}
}

const Box = ({ color }) => {
	const divStyle = {
		width: '200px',
		height: '200px',
		backgroundColor: color
	}

	return (<div style={divStyle} >I'm A Box!</div>);
}

ReactDOM.render(<Counter />, document.getElementById('react-app'));