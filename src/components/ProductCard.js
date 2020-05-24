import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BasketButton from './BasketButton';

const cardStyle = {
	height: 'auto',
	width: 'auto',
	marginBottom: 10,
	paddingLeft: 10,
	paddingRight: 10,
	borderWidth: 0,
	backgroundColor: 'white',
	borderRadius: 16,
	alignItems: 'center',
};

const typeTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	textAlign: 'left',
	marginBottom: 12,
};

const rowStyle = {
	marginLeft: -15,
	marginBottom: 0,
	marginRight: 10,
};

const oldPriceTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	textAlign: 'left',
	marginBottom: 4,
	textDecoration: 'line-through',
};

const priceTextStyle = {
	fontSize: 18,
	color: '#FF4C4B',
	textAlign: 'left',
};

class ProductCard extends React.Component {
	render() {
		const { href, productImg, name, type, oldPrice, price, width, height, fontSize } = this.props;
		const cardBodyStyle = {
			fontSize: fontSize,
			color: '#1E264E',
			textAlign: 'left',
		};
		return (
			<Col>
				<a href={href} style={{ textDecoration: 'none' }}>
					<Card style={cardStyle}>
						<img width={width} height={height} alt="Product_Image" src={productImg} />
						<Card.Body style={cardBodyStyle}>
							{name}
							<p style={typeTextStyle}>{type}</p>
							<Row style={rowStyle}>
								<Col sm={9} md={9} xs={9} lg={9}>
									<p style={oldPriceTextStyle}>{oldPrice}</p>
									<p style={priceTextStyle}>
										<b>{price}</b> ₽/шт
									</p>
								</Col>
								<Col sm={3} md={3} xs={3} lg={3}>
									<BasketButton />
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</a>
			</Col>
		);
	}
}

export default ProductCard;
