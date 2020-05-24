import React from 'react';
import { Row, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledHeading = styled.h1`
	font-size: 15px;
	background: -webkit-gradient(linear, left top, right top, from(#ffffff), to(#E4E8ED));
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
	text-shadow: none;
	align-self: center;
`;

const buttonStyle = {
	width: 240,
	height: 40,
	borderRadius: 8,
	marginBottom: 32,
	padding: 7,
};

const imgStyle = {
	marginRight: 5,
	marginBottom: 3,
};

class AboutButton extends React.Component {
	render() {
		return (
			<Button style={buttonStyle} variant="primary">
				<Row style={{ justifyContent: 'center' }}>
					<img
						width={24}
						height={24}
						alt="sale"
						src={require('../assets/icons/basket1.png')}
						style={imgStyle}
					/>
					<StyledHeading>Добавить в корзину</StyledHeading>
				</Row>
			</Button>
		);
	}
}

export default AboutButton;
