import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

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

const rowStyle = {
	marginTop: 10,
	justifyContent: 'center',
};

const imgStyle = {
	width: '90%',
	height: '90%',
	marginLeft: '5%'
};

class AboutImage extends React.Component {
	render() {
		const { img } = this.props;
		return (
			<Col md={5} xs={12} lg={4} sm={12}>
				<Row style={rowStyle}>
					<Card style={cardStyle}>
						<img alt="sale" src={img} style={imgStyle} />
					</Card>
				</Row>
			</Col>
		);
	}
}

export default AboutImage;
