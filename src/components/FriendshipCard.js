import React from 'react';
import { Col, Card } from 'react-bootstrap';

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
	paddingTop: 24,
	borderWidth: 0,
	backgroundColor: 'white',
	borderRadius: 16,
};

const subTitleStyle = {
	fontSize: 20,
	color: '#1E264E',
	fontWeight: 'bold',
};

const descTextStyle = {
	fontSize: 16,
	color: '#1E264E',
	fontWeight: '500',
	textAlign: 'left',
};

class FriendshipCard extends React.Component {
	render() {
		const { title, subtitle, description } = this.props;
		return (
			<Col md={10}>
				<h1 style={titleStyle}>{title}</h1>
				<Card style={cardStyle}>
					<h1 style={subTitleStyle}>{subtitle}</h1>
					<p style={descTextStyle}>{description}</p>
				</Card>
			</Col>
		);
	}
}

export default FriendshipCard;
