import React from 'react';

const lineStyle = {
	color: 'black',
	height: 5,
};

class Line extends React.Component {
	render() {
		return <hr style={lineStyle} />;
	}
}

export default Line;
