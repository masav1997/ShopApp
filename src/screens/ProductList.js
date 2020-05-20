import React from 'react';

import { Form, Row, Accordion, Card, Col, Button, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

const StyledHeading2 = styled.h1`
	font-size: 13px;
	background: #1e264e;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
	text-shadow: none;
	margin-left: 1em;
`;


class ProductList extends React.Component {
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
					<h2 style={{ fontSize: 32, color: '#1E264E', fontWeight: '600' }}>Вина</h2>
					<Row xs={1} md={1} lg={2} sm={1}>
						<Col sm={12} md={12} xs={12} lg={9}>
							<Row>
								<StyledHeading2>Сортировка:</StyledHeading2>
								<Dropdown style={{marginBottom: 10}}>
									<Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: '#E5E5E5', borderColor: '#E5E5E5', color: '#043E85', fontSize: 13,marginTop: -10}}>
										От дешёвых к дорогим
									</Dropdown.Toggle>

									<Dropdown.Menu style={{backgroundColor: '#E5E5E5', borderColor: '#E5E5E5', color: '#043E85', fontSize: 13}}>
										<Dropdown.Item href="#/action-1" >От дорогих к дешёвым</Dropdown.Item>
										<Dropdown.Item href="#/action-2">По рейтингу</Dropdown.Item>
										<Dropdown.Item href="#/action-3">По популярности</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Row>
							<Row xs={1} md={2} lg={3} sm={1} style={{ marginTop: 10 }}>
								<Col>
									<a href="/About" style={{ textDecoration: 'none' }}>
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
														<p
															style={{
																fontSize: 18,
																color: '#FF4C4B',
																textAlign: 'left',
															}}
														>
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
									</a>
								</Col>
								<Col>
									<a href="/About" style={{ textDecoration: 'none' }}>
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
														<p
															style={{
																fontSize: 18,
																color: '#FF4C4B',
																textAlign: 'left',
															}}
														>
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
									</a>
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
						<Col md={12} xs={12} lg={3} sm={12}>
							<Row style={{ justifyContent: 'flex-end', marginRight: 10 }}>
								<a href="/Catalog">
									<img
										width={20}
										height={20}
										alt="close"
										src={require('../assets/icons/close.png')}
									/>
									<text style={{ fonsize: 14, color: '#5E697F', marginBottom: 0 }}>
										Очистить фильтры
									</text>
								</a>
							</Row>
							<Accordion defaultActiveKey="0" style={{ marginTop: 20}}>
								<Card
									style={{
										width: 'auto',
										borderWidth: 0,
										borderRadius: 16,
										backgroundColor: 'white',
									}}
								>
									<Card.Header
										style={{
											borderWidth: 0,
											backgroundColor: 'white',
										}}
									>
										<Accordion.Toggle
											as={Button}
											variant="link"
											eventKey="0"
											style={{ width: '100%' }}
										>
											<Row>
												<Col md="9" xs="9" style={{ textAlign: 'left' }}>
													<text
														style={{
															fontSize: 16,
															color: '#1E264E',
															textAlign: 'left',
														}}
													>
														Типы вина
													</text>
												</Col>
												<Col md="1" xs="1">
													<img
														src={require('../assets/icons/down.png')}
														width="12"
														height="8"
														alt="Down"
													/>
												</Col>
											</Row>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="0">
										<Card.Body style={{ marginTop: -20, marginLeft: 15 }}>
											<Form>
												<Form.Group>
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-01"
														type={'checkbox'}
														label="Белое"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-02"
														type={'checkbox'}
														label="Красное"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-03"
														type={'checkbox'}
														label="Розовое"
														style={{ color: '#1E264E' }}
													/>
												</Form.Group>
											</Form>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>

							<Accordion style={{ marginTop: 20}}>
								<Card
									style={{
										width: 'auto',
										borderWidth: 0,
										borderRadius: 16,
										backgroundColor: 'white',
									}}
								>
									<Card.Header
										style={{
											borderWidth: 0,
											backgroundColor: 'white',
										}}
									>
										<Accordion.Toggle
											as={Button}
											variant="link"
											eventKey="2"
											style={{ width: '100%' }}
										>
											<Row>
												<Col md="9" xs="9" style={{ textAlign: 'left' }}>
													<text
														style={{
															fontSize: 16,
															color: '#1E264E',
															textAlign: 'left',
														}}
													>
														Торговая марка
													</text>
												</Col>
												<Col md="1" xs="1">
													<img
														src={require('../assets/icons/down.png')}
														width="12"
														height="8"
														alt="Down"
													/>
												</Col>
											</Row>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="2">
										<Card.Body style={{ marginTop: -20, marginLeft: 15 }}>
											<Form>
												<Form.Group>
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-01"
														type={'checkbox'}
														label="Белое"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-02"
														type={'checkbox'}
														label="Красное"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-03"
														type={'checkbox'}
														label="Розовое"
														style={{ color: '#1E264E' }}
													/>
												</Form.Group>
											</Form>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>

							<Accordion style={{ marginTop: 20}}>
								<Card
									style={{
										width: 'auto',
										borderWidth: 0,
										borderRadius: 16,
										backgroundColor: 'white',
									}}
								>
									<Card.Header
										style={{
											borderWidth: 0,
											backgroundColor: 'white',
										}}
									>
										<Accordion.Toggle
											as={Button}
											variant="link"
											eventKey="2"
											style={{ width: '100%' }}
										>
											<Row>
												<Col md="9" xs="9" style={{ textAlign: 'left' }}>
													<text
														style={{
															fontSize: 16,
															color: '#1E264E',
															textAlign: 'left',
														}}
													>
														Сочетание
													</text>
												</Col>
												<Col md="1" xs="1">
													<img
														src={require('../assets/icons/down.png')}
														width="12"
														height="8"
														alt="Down"
													/>
												</Col>
											</Row>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="2">
										<Card.Body style={{ marginTop: -20, marginLeft: 15 }}>
											<Form>
												<Form.Group>
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-01"
														type={'checkbox'}
														label="Белое"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-02"
														type={'checkbox'}
														label="Красное"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-03"
														type={'checkbox'}
														label="Розовое"
														style={{ color: '#1E264E' }}
													/>
												</Form.Group>
											</Form>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>

							<Accordion style={{ marginTop: 20}}>
								<Card
									style={{
										width: 'auto',
										borderWidth: 0,
										borderRadius: 16,
										backgroundColor: 'white',
									}}
								>
									<Card.Header
										style={{
											borderWidth: 0,
											backgroundColor: 'white',
										}}
									>
										<Accordion.Toggle
											as={Button}
											variant="link"
											eventKey="3"
											style={{ width: '100%' }}
										>
											<Row>
												<Col md="9" xs="9" style={{ textAlign: 'left' }}>
													<text
														style={{
															fontSize: 16,
															color: '#1E264E',
															textAlign: 'left',
														}}
													>
														Вкус
													</text>
												</Col>
												<Col md="1" xs="1">
													<img
														src={require('../assets/icons/down.png')}
														width="12"
														height="8"
														alt="Down"
													/>
												</Col>
											</Row>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="3">
										<Card.Body style={{ marginTop: -20, marginLeft: 15 }}>
											<Form>
												<Form.Group>
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-01"
														type={'checkbox'}
														label="Белое"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-02"
														type={'checkbox'}
														label="Красное"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-03"
														type={'checkbox'}
														label="Розовое"
														style={{ color: '#1E264E' }}
													/>
												</Form.Group>
											</Form>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>

							<Accordion style={{ marginTop: 20}}>
								<Card
									style={{
										width: 'auto',
										borderWidth: 0,
										borderRadius: 16,
										backgroundColor: 'white',
									}}
								>
									<Card.Header
										style={{
											borderWidth: 0,
											backgroundColor: 'white',
										}}
									>
										<Accordion.Toggle
											as={Button}
											variant="link"
											eventKey="4"
											style={{ width: '100%' }}
										>
											<Row>
												<Col md="9" xs="9" style={{ textAlign: 'left' }}>
													<text
														style={{
															fontSize: 16,
															color: '#1E264E',
															textAlign: 'left',
														}}
													>
														Упаковка
													</text>
												</Col>
												<Col md="1" xs="1">
													<img
														src={require('../assets/icons/down.png')}
														width="12"
														height="8"
														alt="Down"
													/>
												</Col>
											</Row>
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="4">
										<Card.Body style={{ marginTop: -20, marginLeft: 15 }}>
											<Form>
												<Form.Group>
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-01"
														type={'checkbox'}
														label="Белое"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-02"
														type={'checkbox'}
														label="Красное"
														style={{ color: '#1E264E' }}
													/>
													<br />
													<Form.Check
														custom
														inline
														name="checkbox"
														id="checkbox-03"
														type={'checkbox'}
														label="Розовое"
														style={{ color: '#1E264E' }}
													/>
												</Form.Group>
											</Form>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
}

export default ProductList;
