import React from 'react';

import { Form, Row, Card, Col, Button, Dropdown } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';

class Basket extends React.Component {
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
		return (
			<div style={{ backgroundColor: '#E5E5E5' }}>
				<Header />
				<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: '30%' }}>
					<Row xs={1} md={1} lg={2} sm={1}>
						<Col md={12} xs={12} lg={8} sm={12}>
							<h2 style={{ fontSize: 32, color: '#1E264E', fontWeight: '600' }}>Товары в корзине</h2>
							<Card
								style={{
									height: 'auto',
									width: 'auto',
									marginBottom: 10,
									paddingLeft: 24,
									paddingRight: 24,
									borderWidth: 0,
									backgroundColor: 'white',
									borderRadius: 16,
								}}
							>
								<Card.Body style={{ fontSize: 18, color: '#1E264E' }}>
									<Row>
										<Col
											style={{
												alignSelf: 'center',
												justifySelf: 'flex-start',
											}}
											xs={4}
											md={2}
											lg={2}
											sm={4}
										>
											<img
												width={64}
												height={50}
												alt="sale"
												src={require('../assets/icons/pic4.png')}
											/>
										</Col>
										<Col style={{ alignSelf: 'center' }} xs={8} md={3} lg={3} sm={8}>
											<p
												style={{
													fontSize: 16,
													color: '#1E264E',
													textAlign: 'left',
													marginBottom: 4,
												}}
											>
												Коньяк Gautier XO 0.7 л 40% в подарочной упаковке
											</p>
											<p style={{ fontSize: 13, color: '#7285A4', textAlign: 'left' }}>
												0.5 л, Стекляная бутылка
											</p>
										</Col>
										<Col style={{ alignSelf: 'center' }} xs={2} md={1} lg={1} sm={2}>
												<p
													style={{
														fontSize: 18,
														color: '#1E264E',
														textAlign: 'left',
														marginBottom: 4,
														fontWeight: 'bold',
													}}
												>
													1
												</p>
										</Col>
										<Col style={{ alignSelf: 'center' }} xs={2} md={1} lg={1} sm={2}>
											<Row>
												<a href="/Basket" style={{ textDecoration: 'none' }}>
													<img
														width={24}
														height={24}
														alt="sale"
														src={require('../assets/icons/min.png')}
													/>
												</a>
											</Row>
										</Col>
										<Col style={{ alignSelf: 'center' }} xs={3} md={2} lg={2} sm={3}>
											<Form.Control type="default" style={{ borderColor: '#C0D0EA'}} className="align-self-end"/>
										</Col>
										<Col
											style={{ alignSelf: 'center', backgroundColor: '#fff' }}
											xs={2}
											md={1}
											lg={1}
											sm={2}
										>
											<Row>
												<a href="/Basket" style={{ textDecoration: 'none' }}>
													<img
														width={24}
														height={24}
														alt="sale"
														src={require('../assets/icons/plus.png')}
														style={{ marginLeft: 25 }}
													/>
												</a>
											</Row>
										</Col>
										<Col style={{ alignSelf: 'center' }} xs={3} md={1} lg={1} sm={3}>
											<p
												style={{
													fontSize: 18,
													color: '#1E264E',
													textAlign: 'right',
													fontWeight: 'bold',
													marginBottom: 0
												}}
											>
												10
											</p>
										</Col>
										<Col style={{ alignSelf: 'center' }} xs={12} md={1} lg={1} sm={12}>
											<a href="/Basket" style={{ textDecoration: 'none' }}>
												<img
													width={24}
													height={24}
													alt="sale"
													src={require('../assets/icons/del.png')}
												/>
											</a>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Col>
						<Col md={12} xs={12} lg={4} sm={12}>
							<h2 style={{ fontSize: 32, color: '#1E264E', fontWeight: '600' }}>Оформление</h2>
							<Card
								style={{
									height: 'auto',
									width: 'auto',
									marginBottom: 10,
									paddingLeft: 24,
									paddingRight: 24,
									paddingTop: 40,
									borderWidth: 0,
									backgroundColor: 'white',
									borderRadius: 16,
								}}
							>
								<Row>
									<Col>
										<p style={{ fontSize: 13, color: '#7285A4' }}>Товаров:</p>
									</Col>
									<Col>
										<p
											style={{
												fontSize: 16,
												color: '#1E264E',
												textAlign: 'right',
												fontWeight: '600',
											}}
										>
											8
										</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<p style={{ fontSize: 13, color: '#7285A4' }}> Итоговая цена:</p>
									</Col>
									<Col>
										<p
											style={{
												fontSize: 16,
												color: '#1E264E',
												textAlign: 'right',
												fontWeight: '600',
											}}
										>
											9653.04 ₽
										</p>
									</Col>
								</Row>
								<hr
									style={{
										color: 'black',
										height: 5,
									}}
								/>
								<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 4 }}>ФИО</p>
								<Form.Control
									type="default"
									style={{
										backgroundColor: '#F3F6F7',
										borderRadius: 8,
										borderColor: '#F3F6F7',
										marginBottom: 20,
									}}
								/>
								<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 4 }}>Почта</p>
								<Form.Control
									type="default"
									style={{
										backgroundColor: '#F3F6F7',
										borderRadius: 8,
										borderColor: '#F3F6F7',
										marginBottom: 20,
									}}
								/>
								<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 4 }}>Номер телефона</p>
								<Form.Control
									type="default"
									style={{
										backgroundColor: '#F3F6F7',
										borderRadius: 8,
										borderColor: '#F3F6F7',
										marginBottom: 20,
									}}
								/>
								<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 4 }}>
									Адрес доставки (город, улица, дом)
								</p>
								<Dropdown style={{marginBottom: 10}}>
									<Dropdown.Toggle id="dropdown-basic" style={{
										backgroundColor: '#F3F6F7',
										borderRadius: 8,
										borderColor: '#F3F6F7',
										marginBottom: 20,
										color: '#1E264E',
										width: '100%',
									}}>
										Москва, ул.Мира, 48
									</Dropdown.Toggle>

									<Dropdown.Menu style={{backgroundColor: '#F3F6F7', borderColor: '#F3F6F7', color: '#043E85', fontSize: 13, width: '100%'}}>
										<Dropdown.Item href="#/action-1" >Москва, ул.Мира, 48</Dropdown.Item>
										<Dropdown.Item href="#/action-2">Москва, ул.Мира, 48</Dropdown.Item>
										<Dropdown.Item href="#/action-3">Москва, ул.Мира, 48</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
								<hr
									style={{
										color: 'black',
										height: 5,
									}}
								/>
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
								>
									Оплатить покупку
								</Button>
							</Card>
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Basket;
