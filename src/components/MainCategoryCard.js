import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';

const cardStyle = {
	height: 'auto',
	width: 'auto',
	marginBottom: 16,
	borderWidth: 0,
	backgroundColor: 'white',
	borderRadius: 16,
	paddingLeft: 25,
	paddingTop: 10,
	paddingBottom: 10,
};

const imgStyle = {
	borderRadius: 16,
	alignSelf: 'center',
	width: '40%',
	height: '40%',
	overflow: 'hidden',
	maxWidth: 'auto',
};

const titleStyle = {
	fontSize: 18,
	color: '#1E264E',
	textAlign: 'center',
	alignSelf: 'center',
	height: 45,
	overflow: 'hidden',
	maxWidth: 'auto',
};

class MainCategoryCard extends React.Component {
	render() {
		const { onClick, href, img, title } = this.props;
		return (
			<Col>
				<a href={href} onClick={onClick}>
					<Card style={cardStyle}>
						<Row xs={2} md={2} lg={2} sm={2}>
							<img alt="sale" src={img} style={imgStyle} />
							<Card.Body style={titleStyle}>{title}</Card.Body>
						</Row>
					</Card>
				</a>
			</Col>
		);
	}
}

export default MainCategoryCard;
