import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GradientButton from './GradientButton';

const titleStyle = {
	fontSize: 13,
	color: '#7285A4',
	marginBottom: 0,
};

const descStyle = {
	fontSize: 13,
	color: '#1E264E',
};

const titleStyle1 = {
	fontSize: 13,
	color: '#7285A4',
};

const descStyle1 = {
	fontSize: 16,
	color: '#1E264E',
	textAlign: 'right',
	fontWeight: '600',
};

class ProfileDesc extends React.Component {
	render() {
		const { title, title1, description, description1, onClick } = this.props;
		return (
			<div>
				<Row>
					<Col>
						<p style={titleStyle}>{title}</p>
						<p style={descStyle}>{description}</p>
					</Col>
					<Col style={{ alignSelf: 'center' }}>
						<GradientButton title="Сменить телефон" onClick={onClick} />
					</Col>
				</Row>
				<Row>
					<Col>
						<p style={titleStyle1}>{title1}</p>
					</Col>
					<Col>
						<p style={descStyle1}>{description1}</p>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ProfileDesc;
