import React from 'react';

import { Form, InputGroup, Row, Col, Button, Modal } from 'react-bootstrap';
import styled from 'styled-components';

const StyledHeading = styled.h1`
	font-size: 13px;
	background: -webkit-gradient(linear, left top, right top, from(#63b9ed), to(#043e85));
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
	text-shadow: none;
`;

const StyledHeading1 = styled.h1`
	font-size: 13px;
	background: #7285a4;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
	text-shadow: none;
	margin-left: 1em;
`;

class Footer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: '',
		};

		this.onChange = this.onChange.bind(this);
	}

	state = {
		open1: false,
		open2: false,
	};

	onChange(e) {
		debugger;
		this.setState({
			checked: e.target.value,
		});
	}

	render() {
		const { open1, open2 } = this.state;
		return (
			<Row
				xs={1}
				md={5}
				style={{
					bottom: 0,
					backgroundColor: 'white',
					margin: 0,
					alignSelf: 'flex-end',
					position: 'relative',
					width: '100%',
					height: 'auto',
					padding: 10,
					paddingLeft: 40,
					paddingRight: 40,
					flexShrink: 0
				}}
				className="footer"
			>
				<Col>
					<img
						src={require('../assets/icons/logo.png')}
						alt="Logo"
						style={{ height: 32, marginBottom: 10, width: '50%' }}
					/>
					<Form
						style={{
							backgroundColor: '#F3F6F7',
							borderRadius: 8,
							height: 32,
							borderWidth: 0,
							marginBottom: 10,
						}}
					>
						<Form.Group>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text
										style={{
											backgroundColor: '#F3F6F7',
											borderWidth: 0,
											borderRadius: 8,
											paddingRight: 6,
										}}
									>
										<img
											src={require('../assets/icons/search.png')}
											alt="Search"
											style={{ width: 16, height: 16, marginTop: 3 }}
										/>
									</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control
									type="text"
									placeholder="поиск"
									style={{
										backgroundColor: '#F3F6F7',
										borderTopRightRadius: 8,
										borderBottomRightRadius: 8,
										height: 32,
										borderWidth: 0,
										paddingLeft: 0,
										width: '100%',
										marginTop: -31,
										marginLeft: 35,
									}}
								/>
							</InputGroup>
						</Form.Group>
					</Form>
					<Row xs={1} md={1} lg={2} sm={1}>
						<Col md={12} xs={12} lg={3} sm={12}>
							<p style={{ color: '#FF4C4B', fontSize: 24 }}>18+</p>
						</Col>
						<Col sm={12} md={12} xs={12} lg={9} >
							<p style={{ fonsize: 13, color: '#5E697F' }}>
								Мы не доставляем алкогольную продукцию людям младше 18 лет
							</p>
						</Col>
					</Row>
				</Col>
				<Col>
					<a href="/Catalog">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Виски</p>
					</a>
					<a href="/Catalog">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Водка</p>
					</a>
					<a href="/Catalog">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Пиво</p>
					</a>
					<a href="/Catalog">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Вино</p>
					</a>
				</Col>
				<Col>
					<a href="/Catalog">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Коньяк</p>
					</a>
					<a href="/Catalog">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Шампанское</p>
					</a>
					<a href="/Catalog">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Ром</p>
					</a>
					<a href="/Catalog">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Ликеры</p>
					</a>
				</Col>
				<Col>
					<a href="/Profile">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Вход\регистрация</p>
					</a>
					<a href="/Profile">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Мой профиль</p>
					</a>
					<a href="/Basket">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Корзина</p>
					</a>
					<a href="/FriendShip">
						<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>Предложения</p>
					</a>
				</Col>
				<Col>
					<Row style={{ marginBottom: 0, marginLeft: 0, marginTop: 10 }} onClick={(e) => this.setState({ open2: true })}>
						<img
							src={require('../assets/icons/phone.png')}
							alt="Phone"
							style={{ height: 10, width: 10, marginTop: 3, marginRight: 6 }}
						/>
						<StyledHeading>8 800 112 02 99</StyledHeading>
						<StyledHeading1> с 11:00 до 20:00</StyledHeading1>
					</Row>
					<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>newsite@gmail.com</p>
					<p style={{ fonsize: 13, color: '#5E697F', marginBottom: 0 }}>
						115280, Москва, ул. Ленинская, 14 47
					</p>
					<Row style={{ marginBottom: 0, marginLeft: 0, marginTop: 10 }}>
						<img
							src={require('../assets/icons/telegram.png')}
							alt="telegram"
							style={{ height: 20, width: 20, marginTop: 3, marginRight: 10 }}
						/>
						<img
							src={require('../assets/icons/instagram.png')}
							alt="instagram"
							style={{ height: 20, width: 20, marginTop: 3, marginRight: 10 }}
						/>
						<img
							src={require('../assets/icons/facebook.png')}
							alt="facebook"
							style={{ height: 20, width: 20, marginTop: 3, marginRight: 10 }}
						/>
						<img
							src={require('../assets/icons/twitter.png')}
							alt="twitter"
							style={{ height: 20, width: 20, marginTop: 3, marginRight: 10 }}
						/>
					</Row>
				</Col>
				<Modal show={open2} style={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24, paddingBottom: 19 }}  onHide={() => this.setState({ open2: false })}>
					<p
						style={{
							fontSize: 13,
							color: '#7285A4',
							textAlign: 'center',
							marginTop: 40,
							marginLeft: 24,
							marginRight: 24,
						}}
					>
						Заполните поля чтобы заказать обратный звонок
					</p>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Имя</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Телефон</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Удобное время звонка</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Email</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Номер заказа</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
								}}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Сообщение</p>
							<Form.Control
								type="default"
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									borderColor: '#F3F6F7',
									marginBottom: 20,
									height: 'auto'
								}}
								multiple={true}
							/>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24, alignSelf: 'center', marginBottom: 20 }}>
						<Button
							style={{
								width: 241,
								height: 40,
								borderRadius: 8,
								borderColor: '#043E85',
								fontWeight: 'bold',
								alignSelf: 'center',
								marginBottom: 20,
							}}
							variant="primary"
							onClick={() => this.setState({ open2: false })}
						>
							Перезвонить мне
						</Button>
					</Row>
				</Modal>
			</Row>
		);
	}
}

export default Footer;
