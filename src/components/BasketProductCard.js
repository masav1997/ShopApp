import React from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import Line from './Line';

const titleStyle = {
	fontSize: 32,
	color: '#1E264E',
	fontWeight: '600',
};

const cardStyle = {
	height: 'auto',
	width: 'auto',
	marginBottom: 10,
	paddingLeft: 24,
	paddingRight: 24,
	borderWidth: 0,
	backgroundColor: 'white',
	borderRadius: 16,
};

const cardTitleStyle = {
	fontSize: 16,
	color: '#1E264E',
	textAlign: 'left',
	marginBottom: 4,
};

const cardMountTextStyle = {
	fontSize: 18,
	color: '#1E264E',
	textAlign: 'left',
	marginBottom: 4,
	fontWeight: 'bold',
};

const cardMountTextStyle1 = {
	fontSize: 18,
	color: '#1E264E',
	textAlign: 'right',
	fontWeight: 'bold',
	marginBottom: 0,
};

const cardTypeTextStyle = {
	fontSize: 13,
	color: '#7285A4',
	textAlign: 'left',
};

class BasketProductCard extends React.Component {
	render() {
		const { title, img, type, min, max, title1 } = this.props;
		return (
			<Col md={12} xs={12} lg={8} sm={12}>
				<h2 style={titleStyle}>{title}</h2>
				<Card style={cardStyle}>
					<Card.Body style={{ fontSize: 18, color: '#1E264E' }}>
						<Row>
							<Col
								style={{
									alignSelf: 'center',
									justifySelf: 'flex-start',
								}}
								xs={4}
								md={2}
								lg={2}
								sm={4}
							>
								<img width={64} height={50} alt="sale" src={img} />
							</Col>
							<Col style={{ alignSelf: 'center' }} xs={8} md={3} lg={3} sm={8}>
								<p style={cardTitleStyle}>{title1}</p>
								<p style={cardTypeTextStyle}>{type}</p>
							</Col>
							<Col style={{ alignSelf: 'center' }} xs={2} md={1} lg={1} sm={2}>
								<p style={cardMountTextStyle}>{min}</p>
							</Col>
							<Col style={{ alignSelf: 'center' }} xs={2} md={1} lg={1} sm={2}>
								<Row>
									<a href="/Basket" style={{ textDecoration: 'none' }}>
										<img
											width={24}
											height={24}
											alt="sale"
											src={require('../assets/icons/min.png')}
										/>
									</a>
								</Row>
							</Col>
							<Col style={{ alignSelf: 'center' }} xs={3} md={2} lg={2} sm={3}>
								<Form.Control
									type="default"
									style={{ borderColor: '#C0D0EA' }}
									className="align-self-end"
								/>
							</Col>
							<Col style={{ alignSelf: 'center', backgroundColor: '#fff' }} xs={2} md={1} lg={1} sm={2}>
								<Row>
									<a href="/Basket" style={{ textDecoration: 'none' }}>
										<img
											width={24}
											height={24}
											alt="sale"
											src={require('../assets/icons/plus.png')}
											style={{ marginLeft: 25 }}
										/>
									</a>
								</Row>
							</Col>
							<Col style={{ alignSelf: 'center' }} xs={3} md={1} lg={1} sm={3}>
								<p style={cardMountTextStyle1}>{max}</p>
							</Col>
							<Col style={{ alignSelf: 'center' }} xs={12} md={1} lg={1} sm={12}>
								<a href="/Basket" style={{ textDecoration: 'none' }}>
									<img width={24} height={24} alt="sale" src={require('../assets/icons/del.png')} />
								</a>
							</Col>
						</Row>
						<Line/>
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

export default BasketProductCard;
