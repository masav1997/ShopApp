import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import BasketButton from './BasketButton';

const cardStyle = {
	height: 'auto',
	width: 'auto',
	marginBottom: 10,
	paddingLeft: 24,
	paddingRight: 24,
	borderWidth: 0,
	backgroundColor: 'white',
	borderRadius: 16,
	alignItems: 'center',
};

const cardBodyStyle = {
	fontSize: 18,
	color: '#1E264E',
	textAlign: 'left',
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
		const { href, productImg, name, type, oldPrice, price } = this.props;
		return (
			<Col>
				<a href={href} style={{ textDecoration: 'none' }}>
					<Card style={cardStyle}>
						<img width={'70%'} height={'70%'} alt="Product_Image" src={productImg} />
						<Card.Body style={cardBodyStyle}>
							{name}
							<p style={typeTextStyle}>{type}</p>
							<Row style={rowStyle}>
								<Col md="9" xs="9">
									<p style={oldPriceTextStyle}>{oldPrice}</p>
									<p style={priceTextStyle}>
										<b>{price}</b> ₽/шт
									</p>
								</Col>
								<Col md="3" xs="3">
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
