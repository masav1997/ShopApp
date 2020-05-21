import React from 'react';
import { Row, Col } from 'react-bootstrap';

const titleTableStyle = {
	fontSize: 16,
	color: '#7285A4',
};

const descTableStyle = {
	fontSize: 16,
	color: '#1E264E',
	textAlign: 'right',
};

class AboutRowTable extends React.Component {
	render() {
		const { title, description } = this.props;
		return (
			<Row>
				<Col>
					<p style={titleTableStyle}>{title}</p>
				</Col>
				<Col>
					<p style={descTableStyle}>{description}</p>
				</Col>
			</Row>
		);
	}
}

export default AboutRowTable;
