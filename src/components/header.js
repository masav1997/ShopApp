import React from 'react';

import { Navbar, Nav, Modal, Form, InputGroup, Row, Col, Button } from 'react-bootstrap';
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

class Header extends React.Component {
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
		open3: false,
	};

	onChange(e) {
		debugger;
		this.setState({
			checked: e.target.value,
		});
	}

	render() {
		const { open1, open2, open3 } = this.state;
		return (
			<div style={{ backgroundColor: '#fff' }}>
				<Navbar bg="white" expand="lg" style={{ paddingBottom: 23 }}>
					<Navbar.Brand href="/" style={{ justifyItems: 'flex-end', marginLeft: 40 }}>
						<img src={require('../assets/icons/logo.png')} alt="Search" style={{ height: 32 }} />
						<Row style={{ marginLeft: 0, marginTop: 8, marginBottom: -36, marginRight: 0 }}>
							<img
								src={require('../assets/icons/phone.png')}
								alt="Phone"
								style={{ height: 10, width: 10, marginTop: 3, marginRight: 6 }}
							/>
							<StyledHeading>8 800 112 02 99</StyledHeading>
							<p style={{ fontSize: 11, marginLeft: 6, color: '#7285A4' }}>с 11:00 до 20:00</p>
						</Row>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ color: '#000' }} />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav style={{ width: '65%' }}>
							<Form
								style={{
									backgroundColor: '#F3F6F7',
									borderRadius: 8,
									height: 32,
									borderWidth: 0,
									width: '100%',
									marginLeft: 15,
									marginBottom: 5,
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
												width: '80%',
											}}
										/>
									</InputGroup>
								</Form.Group>
							</Form>
						</Nav>
						<Nav.Link href="/Catalog" style={{ fontSize: 13, width: 165 }}>
							<img
								src={require('../assets/icons/catalog.png')}
								alt="Search"
								style={{ width: 32, height: 32 }}
							/>
							Каталог
						</Nav.Link>
						<Nav.Link href="/Basket" style={{ fontSize: 13, textAlign: 'left', width: 200 }}>
							<img
								src={require('../assets/icons/basket.png')}
								alt="Search"
								style={{ width: 24, height: 24, marginTop: 20, marginRight: 3 }}
							/>
							Корзина (5)
							<p style={{ fontSize: 13, color: '#7285A4', marginLeft: 25, marginTop: -13 }}>152,058₽</p>
						</Nav.Link>
						<Nav.Link
							onClick={(e) => this.setState({ open1: true })}
							style={{ fontSize: 13, marginRight: 40, width: 210 }}
						>
							<img
								src={require('../assets/icons/profile.png')}
								alt="Search"
								style={{ width: 24, height: 24 }}
							/>
							Вход / Регистрация
						</Nav.Link>
					</Navbar.Collapse>
				</Navbar>
				<Modal
					show={open1}
					style={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24, paddingBottom: 19 }}
					onHide={() => this.setState({ open1: false })}
				>
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
						Заполните поля чтобы зарегистрироваться на сайте
					</p>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>ФИО</p>
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
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Почта</p>
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
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Ваш номер телефона</p>
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
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Код из смс</p>
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
						<Col style={{ alignSelf: 'center' }}>
							<StyledHeading
								style={{
									fontSize: 13,
									textAlign: 'right',
								}}
								onClick={(e) => this.setState({ open: true })}
							>
								<a href="#home" style={{ textDecoration: 'none' }}>
									Выслать код
								</a>
							</StyledHeading>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24, alignSelf: 'center' }}>
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
							onClick={() => this.setState({ open1: false })}
						>
							Зарегистрироваться
						</Button>
					</Row>
					<StyledHeading
						style={{
							fontSize: 13,
							textAlign: 'center',
							marginBottom: 20,
						}}
						onClick={() => this.setState({ open1: false, open3:true })}
					>
						<a href="#home" style={{ textDecoration: 'none' }}>
							Войти на сайт
						</a>
					</StyledHeading>
				</Modal>
				<Modal
					show={open3}
					style={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24, paddingBottom: 19 }}
					onHide={() => this.setState({ open1: false })}
				>
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
						Введите ваш номер телефона чтобы войти
					</p>
					<Row style={{ marginLeft: 24, marginRight: 24 }}>
						<Col>
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Ваш номер телефона</p>
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
							<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Код из смс</p>
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
						<Col style={{ alignSelf: 'center' }}>
							<StyledHeading
								style={{
									fontSize: 13,
									textAlign: 'right',
								}}
								onClick={(e) => this.setState({ open: true })}
							>
								<a href="#home" style={{ textDecoration: 'none' }}>
									Выслать код
								</a>
							</StyledHeading>
						</Col>
					</Row>
					<Row style={{ marginLeft: 24, marginRight: 24, alignSelf: 'center' }}>
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
							onClick={() => this.setState({ open3: false })}
						>
							Войти на сайт
						</Button>
					</Row>
					<StyledHeading
						style={{
							fontSize: 13,
							textAlign: 'center',
							marginBottom: 20,
						}}
						onClick={() => this.setState({ open3: false, open1: true })}
					>
						<a href="#home" style={{ textDecoration: 'none' }}>
							Зарегистрироваться
						</a>
					</StyledHeading>
				</Modal>
				<Modal
					show={open2}
					style={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24, paddingBottom: 19 }}
					onHide={() => this.setState({ open2: false })}
				>
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
								}}
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
			</div>
		);
	}
}

export default Header;
