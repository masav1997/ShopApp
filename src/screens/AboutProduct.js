import React from 'react';

import { Row, Card, Col, Button } from 'react-bootstrap';
import Header from '../components/header';
import Footer from '../components/footer';
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
	align-self: center;
`;

class AboutProduct extends React.Component {
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
				<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: 180 }}>
					<Row xs={1} md={2} lg={2} sm={1}>
						<Col md={5} xs={12} lg={4} sm={12}>
							<Row xs={2} md={3} style={{ marginTop: 10, justifyContent: 'center' }}>
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 10,
										paddingLeft: 178,
										paddingRight: 178,
										paddingTop: 24,
										paddingBottom: 24,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
										alignItems: 'center',
									}}
								>
									<img
										alt="sale"
										src={require('../assets/icons/pilsner.jpeg')}
										style={{width: 350, height: 350 }}
									/>
								</Card>
							</Row>
						</Col>
						<Col md={9}>
							<h2 style={{ fontSize: 24, color: '#1E264E', fontWeight: '600', marginBottom: 0 }}>
								Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%{' '}
							</h2>
							<p style={{ fontsize: 13, color: '#8290A7', marginBottom: 0 }}>0.5 л, Жестяная банка</p>
							<p
								style={{
									fontSize: 24,
									color: '#7285A4',
									textAlign: 'left',
									textDecoration: 'line-through',
									marginBottom: -10,
								}}
							>
								5050.12 ₽/шт
							</p>
							<p style={{ fontSize: 32, color: '#FF4C4B', textAlign: 'left', marginBottom: 0 }}>
								<strong style={{ fontSize: 32, color: '#FF4C4B', fontWeight: '900' }}>499.28</strong>{' '}
								₽/шт
							</p>
							<Row style={{ marginLeft: 0, alignContent: 'center' }}>
								<p
									style={{
										fontSize: 13,
										color: '#7285A4',
										textAlign: 'left',
										marginBottom: -20,
										marginRight: 50,
									}}
								>
									Бонусы за покупку:
								</p>
								<p
									style={{
										fontSize: 16,
										color: '#1E264E',
										textAlign: 'left',
									}}
								>
									9653
								</p>
							</Row>
							<Button
								style={{
									width: 240,
									height: 40,
									borderRadius: 8,
									borderColor: '#043E85',
									marginBottom: 32,
									padding:10
								}}
								variant="light"
							>
								<Row style={{justifyContent: 'center'}}>
								<img
									width={24}
									height={24}
									alt="sale"
									src={require('../assets/icons/basket.png')}
									style={{ marginRight: 5, marginBottom:3 }}
								/>
								<StyledHeading>Добавить в корзину</StyledHeading>
								</Row>
							</Button>
							<p style={{ fontSize: 18, color: '#1E264E' }}>Характеристики</p>
							<Row xs={2} md={2} lg={2} sm={2}>
								<Col>
									<Card
										style={{
											width: '100%',
											height: 'auto',
											borderRightColor: '#E4E9F8',
											borderRightWidth: 2,
											borderRadius: 0,
											borderLeftWidth: 0,
											borderBottomWidth: 0,
											borderTopWidth: 0,
											backgroundColor: '#E5E5E5',
											paddingRight: 12,
										}}
									>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>Объем, л</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													0,5
												</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>
													Количество штук в упаковке
												</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>24</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>Крепость</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													4.4%
												</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>Цвет</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													Светлое
												</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>Упаковка</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													Жестяная банка
												</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>Тип</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													Фильтрованное{' '}
												</p>
											</Col>
										</Row>
									</Card>
								</Col>
								<Col>
									<Card
										style={{
											width: '100%',
											height: 'auto',
											borderRadius: 0,
											borderWidth: 0,
											backgroundColor: '#E5E5E5',
											marginLeft: 0,
										}}
									>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>Пивоварня</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													Plzensky Prazdroj
												</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>Вид</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													Пилснер (Pilsner)
												</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>Размеры</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													ящик: 404 x 268 x 171 мм
												</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>
													Страна-производитель товара
												</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													Чехия
												</p>
											</Col>
										</Row>
										<Row>
											<Col>
												<p style={{ fontSize: 16, color: '#7285A4' }}>
													Страна регистрации бренда
												</p>
											</Col>
											<Col>
												<p style={{ fontSize: 16, color: '#1E264E', textAlign: 'right' }}>
													Чехия
												</p>
											</Col>
										</Row>
									</Card>
								</Col>
							</Row>
							<h2 style={{ fontSize: 32, color: '#1E264E', fontWeight: '600', marginBottom: 0 }}>
								С этим товаром берут
							</h2>
							<Row xs={1} md={2} lg={2} sm={1} xl={3} style={{ marginTop: 10 }}>
								<Col>
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
											alignItems: 'center',
										}}
									>
										<img
											width={'100%'}
											height={'100%'}
											alt="sale"
											src={require('../assets/icons/pilsner.jpeg')}
											style={{ borderRadius: 16, marginTop: 20 }}
										/>
										<Card.Body style={{ fontSize: 18, color: '#1E264E', textAlign: 'left' }}>
											Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%
											<p
												style={{
													fontSize: 13,
													color: '#7285A4',
													textAlign: 'left',
													marginBottom: 12,
												}}
											>
												0.5 л, Жестяная банка
											</p>
											<Row style={{ marginLeft: -15, marginBottom: 0, marginRight: 10 }}>
												<Col md="9" xs="9">
													<p
														style={{
															fontSize: 13,
															color: '#7285A4',
															textAlign: 'left',
															marginBottom: 4,
															textDecoration: 'line-through',
														}}
													>
														5050.12 ₽/шт
													</p>
													<p style={{ fontSize: 18, color: '#FF4C4B', textAlign: 'left' }}>
														<b>499.28</b> ₽/шт
													</p>
												</Col>
												<Col md="3" xs="3">
													<Button
														style={{
															width: 40,
															height: 40,
															borderRadius: 8,
															borderColor: '#043E85',
														}}
														variant="light"
													>
														<img
															width={24}
															height={24}
															alt="sale"
															src={require('../assets/icons/basket.png')}
															style={{ marginLeft: -5 }}
														/>
													</Button>
												</Col>
											</Row>
										</Card.Body>
									</Card>
								</Col>
								<Col>
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
											alignItems: 'center',
										}}
									>
										<img
											width={'100%'}
											height={'100%'}
											alt="sale"
											src={require('../assets/icons/jim.jpeg')}
											style={{ borderRadius: 16, marginTop: 20 }}
										/>
										<Card.Body style={{ fontSize: 18, color: '#1E264E', textAlign: 'left' }}>
											Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%
											<p
												style={{
													fontSize: 13,
													color: '#7285A4',
													textAlign: 'left',
													marginBottom: 12,
												}}
											>
												0.5 л, Жестяная банка
											</p>
											<Row style={{ marginLeft: -15, marginBottom: 0, marginRight: 10 }}>
												<Col md="9" xs="9">
													<p
														style={{
															fontSize: 13,
															color: '#7285A4',
															textAlign: 'left',
															marginBottom: 4,
															textDecoration: 'line-through',
														}}
													>
														5050.12 ₽/шт
													</p>
													<p style={{ fontSize: 18, color: '#FF4C4B', textAlign: 'left' }}>
														<b>499.28</b> ₽/шт
													</p>
												</Col>
												<Col md="3" xs="3">
													<Button
														style={{
															width: 40,
															height: 40,
															borderRadius: 8,
															borderColor: '#043E85',
														}}
														variant="light"
													>
														<img
															width={24}
															height={24}
															alt="sale"
															src={require('../assets/icons/basket.png')}
															style={{ marginLeft: -5 }}
														/>
													</Button>
												</Col>
											</Row>
										</Card.Body>
									</Card>
								</Col>
								<Col>
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
											alignItems: 'center',
										}}
									>
										<img
											width={'100%'}
											height={'100%'}
											alt="sale"
											src={require('../assets/icons/pilsner.jpeg')}
											style={{ borderRadius: 16, marginTop: 20 }}
										/>
										<Card.Body style={{ fontSize: 18, color: '#1E264E', textAlign: 'left' }}>
											Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%
											<p
												style={{
													fontSize: 13,
													color: '#7285A4',
													textAlign: 'left',
													marginBottom: 12,
												}}
											>
												0.5 л, Жестяная банка
											</p>
											<Row style={{ marginLeft: -15, marginBottom: 0, marginRight: 10 }}>
												<Col md="9" xs="9">
													<p
														style={{
															fontSize: 13,
															color: '#7285A4',
															textAlign: 'left',
															marginBottom: 4,
															textDecoration: 'line-through',
														}}
													>
														5050.12 ₽/шт
													</p>
													<p style={{ fontSize: 18, color: '#FF4C4B', textAlign: 'left' }}>
														<b>499.28</b> ₽/шт
													</p>
												</Col>
												<Col md="3" xs="3">
													<Button
														style={{
															width: 40,
															height: 40,
															borderRadius: 8,
															borderColor: '#043E85',
														}}
														variant="light"
													>
														<img
															width={24}
															height={24}
															alt="sale"
															src={require('../assets/icons/basket.png')}
															style={{ marginLeft: -5 }}
														/>
													</Button>
												</Col>
											</Row>
										</Card.Body>
									</Card>
								</Col>
								<Col>
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
											alignItems: 'center',
										}}
									>
										<img
											width={'100%'}
											height={'100%'}
											alt="sale"
											src={require('../assets/icons/jim.jpeg')}
											style={{ borderRadius: 16, marginTop: 20 }}
										/>
										<Card.Body style={{ fontSize: 18, color: '#1E264E', textAlign: 'left' }}>
											Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%
											<p
												style={{
													fontSize: 13,
													color: '#7285A4',
													textAlign: 'left',
													marginBottom: 12,
												}}
											>
												0.5 л, Жестяная банка
											</p>
											<Row style={{ marginLeft: -15, marginBottom: 0, marginRight: 10 }}>
												<Col md="9" xs="9">
													<p
														style={{
															fontSize: 13,
															color: '#7285A4',
															textAlign: 'left',
															marginBottom: 4,
															textDecoration: 'line-through',
														}}
													>
														5050.12 ₽/шт
													</p>
													<p style={{ fontSize: 18, color: '#FF4C4B', textAlign: 'left' }}>
														<b>499.28</b> ₽/шт
													</p>
												</Col>
												<Col md="3" xs="3">
													<Button
														style={{
															width: 40,
															height: 40,
															borderRadius: 8,
															borderColor: '#043E85',
														}}
														variant="light"
													>
														<img
															width={24}
															height={24}
															alt="sale"
															src={require('../assets/icons/basket.png')}
															style={{ marginLeft: -5 }}
														/>
													</Button>
												</Col>
											</Row>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
}

export default AboutProduct;
