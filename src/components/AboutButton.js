import React from 'react';
import { Row, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledHeading = styled.h1`
	font-size: 13px;
	background: -webkit-gradient(linear, left top, right top, from(#63b9ed), to(#043e85));
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
	borderColor: '#043E85',
	marginBottom: 32,
	padding: 10,
};

const imgStyle = {
	marginRight: 5,
	marginBottom: 3,
};

class AboutButton extends React.Component {
	render() {
		return (
			<Button style={buttonStyle} variant="light">
				<Row style={{ justifyContent: 'center' }}>
					<img
						width={24}
						height={24}
						alt="sale"
						src={require('../assets/icons/basket.png')}
						style={imgStyle}
					/>
					<StyledHeading>Добавить в корзину</StyledHeading>
				</Row>
			</Button>
		);
	}
}

export default AboutButton;
