import React from 'react';
import { Button } from 'react-bootstrap';

const buttonStyle = {
	width: 241,
	height: 40,
	borderRadius: 8,
	borderColor: '#043E85',
	fontWeight: 'bold',
	alignSelf: 'center',
	marginBottom: 20,
};

class ButtonWithoutImg extends React.Component {
	render() {
		const { title, onClick } = this.props;
		return (
			<Button style={buttonStyle} variant="primary" onClick={onClick}>
				{title}
			</Button>
		);
	}
}

export default ButtonWithoutImg;
