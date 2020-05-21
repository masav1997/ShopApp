import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

import ButtonWithoutImg from './ButtonWithoutImg';
import InputForm from './InputForm';
import GradientButton from './GradientButton';

const modalStyle = {
	paddingTop: 40,
	paddingLeft: 24,
	paddingRight: 24,
	paddingBottom: 19,
};

const textStyle = {
	fontSize: 13,
	color: '#7285A4',
	textAlign: 'center',
	marginTop: 40,
	marginLeft: 24,
	marginRight: 24,
};

class SignUpModal extends React.Component {
	render() {
		const { show, text, onHide, onClick } = this.props;
		return (
			<Modal show={show} style={modalStyle} onHide={onHide}>
				<p style={textStyle}>{text}</p>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="ФИО" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Почта" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Ваш номер телефона" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Код из смс" />
					</Col>
					<Col style={{ alignSelf: 'center' }}>
						<GradientButton title="Выслать код" onClick={onClick} />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24, alignSelf: 'center' }}>
					<ButtonWithoutImg title="Зарегистрироваться" onClick={onClick} />
				</Row>
				<GradientButton title="Войти на сайт" onClick={onClick} />
			</Modal>
		);
	}
}

export default SignUpModal;
