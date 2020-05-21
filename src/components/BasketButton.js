import React from 'react';
import { Button } from 'react-bootstrap';

const buttonStyle = {
	width: 40,
	height: 40,
	borderRadius: 8,
	borderColor: '#043E85',
};

class BasketButton extends React.Component {
	render() {
		return (
			<Button style={buttonStyle} variant="light">
				<img
					width={24}
					height={24}
					alt="sale"
					src={require('../assets/icons/basket.png')}
					style={{ marginLeft: -5 }}
				/>
			</Button>
		);
	}
}

export default BasketButton;
