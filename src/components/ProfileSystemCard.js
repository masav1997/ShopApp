import React from 'react';
import { Col, Card } from 'react-bootstrap';
import GradientButton from './GradientButton';
import ProfileText from './ProfileText';

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
	paddingTop: 40,
	borderWidth: 0,
	backgroundColor: 'white',
	borderRadius: 16,
};

class ProfileSystemCard extends React.Component {
	state = {
		open: false,
	};
	render() {
		return (
			<Col md={12} xs={12} lg={4} sm={12}>
				<h2 style={titleStyle}>Реф. система</h2>
				<Card style={cardStyle}>
					<ProfileText title="Количество баллов" description="54161" />
					<ProfileText title="Текущая скидка" description="1%" />
					<ProfileText title="Баллов до следующего уровня" description="5151" />
					<ProfileText title="Реферальная ссылка" description="newrefererlink.com/gfgfd/fd" />
					<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Реферальная ссылка</p>
					<div style={{ alignSelf: 'flex-start' }}>
						<GradientButton title="Скопировать ссылку" />
					</div>
				</Card>
			</Col>
		);
	}
}

export default ProfileSystemCard;
