import React from 'react';
import { Modal, Row } from 'react-bootstrap';

import ButtonWithoutImg from './ButtonWithoutImg';
import GradientButton from './GradientButton';

const modalStyle = {
	paddingTop: 40,
	paddingLeft: 24,
	paddingRight: 24,
	paddingBottom: 19,
};

const imgStyle = {
	borderRadius: 16,
	alignSelf: 'center',
	marginTop: 10,
};

const textStyle = {
	fontSize: 13,
	color: '#7285A4',
	textAlign: 'center',
	marginLeft: 24,
	marginRight: 24,
};

class AgeModal extends React.Component {
	render() {
		const { show, text, onHide, onClick } = this.props;
		return (
			<Modal show={show} style={modalStyle} onHide={onHide}>
				<img width={'40%'} height={'40%'} alt="18+" src={require('../assets/icons/18+.png')} style={imgStyle} />
				<p style={textStyle}>{text}</p>
				<Row style={{ marginLeft: 24, marginRight: 24, alignSelf: 'center' }}>
					<ButtonWithoutImg title="Да, мне есть 18 лет" onClick={onClick} />
				</Row>
				<GradientButton onClick={onClick} title="Нет, мне меньше 18" />
			</Modal>
		);
	}
}

export default AgeModal;
