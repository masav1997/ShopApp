import React from 'react';

import { Form, Row, Card, Col, Modal, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/header';
import Footer from '../components/footer';

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

class Basket extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: '',
		};

		this.onChange = this.onChange.bind(this);
	}

	state = {
		open: false,
	};

	onChange(e) {
		debugger;
		this.setState({
			checked: e.target.value,
		});
	}

	render() {
		const { open } = this.state;
		return (
			<div style={{ backgroundColor: '#E5E5E5' }}>
				<Header />
				<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: '30%'}}>
					<Row xs={1} md={1} lg={2} sm={1}>
						<Col md={12} xs={12} lg={8} sm={12}>
							<h1 style={{ fontSize: 32, color: '#1E264E', fontWeight: '600' }}>Профиль</h1>
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
										<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>
											Номер телефона:
										</p>
										<p style={{ fontSize: 13, color: '#1E264E' }}>+8 800 112 02 99</p>
									</Col>
									<Col style={{ alignSelf: 'center' }}>
										<StyledHeading
											style={{
												fontSize: 13,
												textAlign: 'right',
											}}
											onClick={(e) => this.setState({ open: true })}
										>
											Сменить телефон
										</StyledHeading>
									</Col>
								</Row>
								<Modal
									show={open}
									style={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24, paddingBottom: 19 }}
									onHide={() => this.setState({ open: false })}
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
										Для смены номера телефона, на текущий номер телефона придет смс с кодом
									</p>
									<Row style={{ marginLeft: 24, marginRight: 24 }}>
										<Col>
											<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>
												Код из смс старого телефона
											</p>
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
												Выслать код
											</StyledHeading>
										</Col>
									</Row>
									<Row
										style={{
											marginLeft: 24,
											marginRight: 24,
											borderBottomWidth: 1,
											borderBottomColor: 'black',
										}}
									>
										<Col>
											<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>
												Новый номер телефона
											</p>
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
											<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>
												Код из смс нового телефона
											</p>
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
												Выслать код
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
											onClick={() => this.setState({ open: false })}
										>
											Сохранить изменения
										</Button>
									</Row>
								</Modal>
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
								<Row>
									<Col style={{ alignSelf: 'flex-end' }}>
										<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 4 }}>
											Адрес доставки (город, улица, дом)
										</p>
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
									<Col style={{ alignSelf: 'flex-end' }}>
										<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 4 }}>Адрес 1</p>
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
									<Col style={{ alignSelf: 'flex-end' }}>
										<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 4 }}>Адрес 2</p>
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
								<Row xs={1} md={2} style={{ marginBottom: 10 }}>
									<Col style={{ alignSelf: 'center' }}>
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
											Сохранить изменения
										</Button>
									</Col>
									<Col style={{ alignSelf: 'center', marginBottom: 15 }}>
										<StyledHeading
											style={{
												fontSize: 13,
												textAlign: 'left',
											}}
										>
											Сменить телефон
										</StyledHeading>
									</Col>
								</Row>
							</Card>
						</Col>
						<Col md={12} xs={12} lg={4} sm={12}>
							<h2 style={{ fontSize: 32, color: '#1E264E', fontWeight: '600' }}>Реф. система</h2>
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
								<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Количество баллов</p>
								<p
									style={{
										fontSize: 13,
										color: '#1E264E',
										textAlign: 'left',
									}}
								>
									54161
								</p>
								<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}> Текущая скидка</p>
								<p
									style={{
										fontSize: 13,
										color: '#1E264E',
										textAlign: 'left',
									}}
								>
									1%
								</p>
								<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>
									Баллов до следующего уровня
								</p>
								<p
									style={{
										fontSize: 13,
										color: '#1E264E',
										textAlign: 'left',
									}}
								>
									5151
								</p>
								<p style={{ fontSize: 13, color: '#7285A4', marginBottom: 0 }}>Реферальная ссылка</p>
								<p
									style={{
										fontSize: 13,
										color: '#1E264E',
										textAlign: 'left',
										marginBottom: 0,
									}}
								>
									newrefererlink.com/gfgfd/fd
								</p>
								<StyledHeading
									style={{
										fontSize: 13,
										textAlign: 'left',
									}}
								>
									Скопировать ссылку
								</StyledHeading>
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
