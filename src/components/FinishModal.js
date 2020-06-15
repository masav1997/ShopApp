import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import GradientButton from './GradientButton';

const titleTableStyle = {
	fontSize: 16,
	color: '#7285A4',
};

const descTableStyle = {
	fontSize: 16,
	color: '#1E264E',
	textAlign: 'right',
};

const modalStyle = {
	paddingTop: 40,
	paddingLeft: 24,
	paddingRight: 24,
	paddingBottom: 19,
};

const textStyle = {
	fontSize: 22,
	color: '#0275d8',
	textAlign: 'center',
	marginTop: 40,
	marginLeft: 24,
	marginRight: 24,
	marginBottom: 50,
};

class FinishModal extends React.Component {
	render() {
		const { show, text, onHide, onClick, title, description } = this.props;
		return (
			<Modal show={show} style={modalStyle} onHide={onHide}>
				<p style={textStyle}>{text}</p>
				<Row style={{ marginLeft: 24, marginRight: 24, marginBottom: 50 }}>
					<Col>
						<p style={titleTableStyle}>{title}</p>
					</Col>
					<Col>
						<p style={descTableStyle}>{description}</p>
					</Col>
				</Row>

				<GradientButton title="ОК" onClick={onClick} />
			</Modal>
		);
	}
}

export default FinishModal;
