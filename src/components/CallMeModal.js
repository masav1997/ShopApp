import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

import ButtonWithoutImg from './ButtonWithoutImg';
import InputForm from './InputForm';

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

class CallMeModal extends React.Component {
	render() {
		const { show, text, onHide, onClick } = this.props;
		return (
			<Modal show={show} style={modalStyle} onHide={onHide}>
				<p style={textStyle}>{text}</p>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Имя" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Телефон" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Удобное время звонка" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Email" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Номер заказа" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24 }}>
					<Col>
						<InputForm title="Сообщение" />
					</Col>
				</Row>
				<Row style={{ marginLeft: 24, marginRight: 24, alignSelf: 'center', marginBottom: 20 }}>
					<ButtonWithoutImg title="Перезвонить мне" onClick={onClick} />
				</Row>
			</Modal>
		);
	}
}

export default CallMeModal;
