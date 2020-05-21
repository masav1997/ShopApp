import React from 'react';
import { Row } from 'react-bootstrap';

const titleStyle = {
	fontSize: 24,
	color: '#1E264E',
	fontWeight: '600',
	marginBottom: 0,
};

const descStyle = {
	fontsize: 13,
	color: '#8290A7',
	marginBottom: 0,
};

const oldPriceStyle = {
	fontSize: 24,
	color: '#7285A4',
	textAlign: 'left',
	textDecoration: 'line-through',
	marginBottom: -10,
};

const priceStyle = {
	fontSize: 32,
	color: '#FF4C4B',
	textAlign: 'left',
	marginBottom: 0,
};

const boldPriceStyle = {
	fontSize: 32,
	color: '#FF4C4B',
	fontWeight: '900',
};

const rowStyle = {
	marginLeft: 0,
	alignContent: 'center',
};

const bonusTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	textAlign: 'left',
	marginBottom: -20,
	marginRight: 50,
};

const bonusStyle = {
	fontSize: 16,
	color: '#1E264E',
	textAlign: 'left',
};

class AboutDescription extends React.Component {
	render() {
		const { title, description, oldPrice, price, bonus } = this.props;
		return (
			<div>
				<h2 style={titleStyle}>{title}</h2>
				<p style={descStyle}>{description}</p>
				<p style={oldPriceStyle}>{oldPrice}</p>
				<p style={priceStyle}>
					<strong style={boldPriceStyle}>{price}</strong> ₽/шт
				</p>
				<Row style={rowStyle}>
					<p style={bonusTextStyle}>Бонусы за покупку:</p>
					<p style={bonusStyle}>{bonus}</p>
				</Row>
			</div>
		);
	}
}

export default AboutDescription;
