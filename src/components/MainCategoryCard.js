import React from 'react';
import { Col, Card } from 'react-bootstrap';

const cardStyle = {
	height: 'auto',
	width: 'auto',
	marginBottom: 16,
	borderWidth: 0,
	backgroundColor: 'white',
	borderRadius: 16,
};

const imgStyle = {
	borderRadius: 16,
	alignSelf: 'center',
	width: '40%',
	height: '40%',
	marginTop: 24,
};

const titleStyle = {
	fontSize: 18,
	color: '#1E264E',
	textAlign: 'center',
	marginBottom: 20,
};

class MainCategoryCard extends React.Component {
	render() {
		const { onClick, href, img, title } = this.props;
		return (
			<Col>
				<a href={href} onClick={onClick}>
					<Card style={cardStyle}>
						<img alt="sale" src={img} style={imgStyle} />
						<Card.Body style={titleStyle}>{title}</Card.Body>
					</Card>
				</a>
			</Col>
		);
	}
}

export default MainCategoryCard;
