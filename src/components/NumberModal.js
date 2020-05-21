import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

import ButtonWithoutImg from './ButtonWithoutImg';
import GradientButton from './GradientButton';
import InputForm from './InputForm';

const modalStyle = {
	paddingTop: 40,
	paddingLeft: 24,
	paddingRight: 24,
	paddingBottom: 19,
};

const rowStyle = {
	marginLeft: 24,
	marginRight: 24,
};

const rowButtonStyle = {
	marginLeft: 24,
	marginRight: 24,
	alignSelf: 'center',
};

const textStyle = {
	fontSize: 13,
	color: '#7285A4',
	textAlign: 'center',
	marginTop: 40,
	marginLeft: 24,
	marginRight: 24,
};

class NumberModal extends React.Component {
	render() {
		const { show, text, onHide, onClick } = this.props;
		return (
			<Modal show={show} style={modalStyle} onHide={onHide}>
				<p style={textStyle}>{text}</p>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Код из смс старого телефона" />
					</Col>
					<Col style={{ alignSelf: 'center', marginTop: 15 }}>
						<GradientButton title="Выслать код" />
					</Col>
				</Row>
				<Row style={rowStyle}>
					<Col>
						<InputForm title="Новый номер телефона" />
					</Col>
				</Row>
				<Row style={rowStyle}>
					<Col>
						<InputForm title="Код из смс нового телефона" />
					</Col>
					<Col style={{ alignSelf: 'center', marginTop: 15 }}>
						<GradientButton title="Выслать код" />
					</Col>
				</Row>
				<Row style={rowButtonStyle}>
					<ButtonWithoutImg title="Сохранить изменения" onClick={onClick} />
				</Row>
			</Modal>
		);
	}
}

export default NumberModal;
