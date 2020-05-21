import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import NumberModal from './NumberModal';
import ProfileDesc from './ProfileDesc';
import InputForm from './InputForm';
import ButtonWithoutImg from './ButtonWithoutImg';

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

class ProfileCard extends React.Component {
	state = {
		open: false,
	};
	render() {
		const { open } = this.state;
		return (
			<Col md={12} xs={12} lg={8} sm={12}>
				<h1 style={titleStyle}>Профиль</h1>
				<Card style={cardStyle}>
					<NumberModal
						show={open}
						text="Для смены номера телефона, на текущий номер телефона придет смс с кодом"
						onHide={() => this.setState({ open: false })}
						onClick={() => this.setState({ open: false })}
					/>
					<ProfileDesc
						title="Номер телефона:"
						title1="Итоговая цена:"
						description="+8 800 112 02 99"
						description1="9653.04 ₽"
						onClick={() => this.setState({ open: true })}
					/>
					<InputForm title="ФИО" />
					<InputForm title="Почта" />
					<InputForm title="Номер телефона" />
					<Row>
						<Col style={{ alignSelf: 'flex-end' }}>
							<InputForm title="Адрес доставки (город, улица, дом)" />
						</Col>
						<Col style={{ alignSelf: 'flex-end' }}>
							<InputForm title="Адрес 1" />
						</Col>
						<Col style={{ alignSelf: 'flex-end' }}>
							<InputForm title="Адрес 2" />
						</Col>
					</Row>
					<Row xs={1} md={2} style={{ marginBottom: 10 }}>
						<Col style={{ alignSelf: 'center' }}>
							<ButtonWithoutImg title="Сохранить изменения" />
						</Col>
					</Row>
				</Card>
			</Col>
		);
	}
}

export default ProfileCard;
