'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var html = React.createElement(
	'h1',
	null,
	'Hello, Beatport'
);

var Counter = function (_React$Component) {
	_inherits(Counter, _React$Component);

	function Counter(props) {
		_classCallCheck(this, Counter);

		var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

		_this.state = {
			count: 0,
			color: 'red'
		};
		return _this;
	}

	_createClass(Counter, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'Hello, Beatport'
				),
				React.createElement(
					'h2',
					null,
					' The current count is ',
					this.state.count
				),
				React.createElement(
					'span',
					null,
					React.createElement(
						'button',
						{ onClick: this.increment.bind(this) },
						'Add'
					)
				),
				React.createElement(
					'span',
					null,
					React.createElement(
						'button',
						{ onClick: this.decrement.bind(this) },
						'Remove'
					)
				),
				React.createElement(
					'span',
					null,
					React.createElement(
						'button',
						{ onClick: this.changeColor.bind(this) },
						'Change Box Color'
					)
				),
				React.createElement('hr', null),
				React.createElement(Box, { color: this.state.color })
			);
		}
	}, {
		key: 'increment',
		value: function increment() {
			this.setState(function (prevState) {
				return {
					count: prevState.count += 1
				};
			});
		}
	}, {
		key: 'decrement',
		value: function decrement() {
			this.setState(function (prevState) {
				return {
					count: prevState.count -= 1
				};
			});
		}
	}, {
		key: 'changeColor',
		value: function changeColor() {
			var _this2 = this;

			this.setState(function (prevState) {
				return {
					color: _this2.getRandomColor()
				};
			});
		}
	}, {
		key: 'getRandomColor',
		value: function getRandomColor() {
			return '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
		}
	}]);

	return Counter;
}(React.Component);

var Box = function Box(_ref) {
	var color = _ref.color;

	var divStyle = {
		width: '200px',
		height: '200px',
		backgroundColor: color
	};

	return React.createElement(
		'div',
		{ style: divStyle },
		'I\'m A Box!'
	);
};

ReactDOM.render(React.createElement(Counter, null), document.getElementById('react-app'));
