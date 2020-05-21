import React from 'react';
import { Row, Col } from 'react-bootstrap';

const titleStyle = {
	fontSize: 13,
	color: '#7285A4',
};

const descStyle = {
	fontSize: 16,
	color: '#1E264E',
	textAlign: 'right',
	fontWeight: '600',
};

class BasketRegCardDesc extends React.Component {
	render() {
		const { title, desc } = this.props;
		return (
			<Row>
				<Col>
					<p style={titleStyle}>{title}</p>
				</Col>
				<Col>
					<p style={descStyle}>{desc}</p>
				</Col>
			</Row>
		);
	}
}

export default BasketRegCardDesc;
