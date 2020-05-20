import React from 'react';

import { Row, Carousel, Card, Col, Modal, Button } from 'react-bootstrap';
import Img from 'react-cool-img';
import Header from '../components/header';
import Footer from '../components/footer';

import Slider from '../assets/icons/slider.png';
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

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: '',
		};

		this.onChange = this.onChange.bind(this);
	}

	state = {
		open1: true,
	};

	onChange(e) {
		debugger;
		this.setState({
			checked: e.target.value,
		});
	}

	render() {
		const { open1 } = this.state;
		return (
			<div style={{ backgroundColor: '#E5E5E5' }}>
				<Header />
				<Carousel controls={true} style={{ margin: 15, marginLeft: '5%', marginRight: '5%' }}>
					<Carousel.Item>
						<a href="/Catalog">
							<Img placeholder={Slider} style={{ width: '100%', height: '80%' }} />
						</a>
					</Carousel.Item>
					<Carousel.Item>
						<a href="/Catalog">
							<img
								width={'100%'}
								height={'80%'}
								alt="slide2"
								src={require('../assets/icons/slider.png')}
								style={{ borderRadius: 16 }}
							/>
						</a>
					</Carousel.Item>
					<Carousel.Item>
						<a href="/Catalog">
							<img
								width={'100%'}
								height={'80%'}
								alt="slide3"
								src={require('../assets/icons/slider.png')}
								style={{ borderRadius: 16 }}
							/>
						</a>
					</Carousel.Item>
				</Carousel>
				<Modal
					show={open1}
					style={{ paddingTop: 40, paddingLeft: 24, paddingRight: 24, paddingBottom: 19 }}
					onHide={() => this.setState({ open1: false })}
				>
					<img
								width={'40%'}
								height={'40%'}
								alt="slide3"
								src={require('../assets/icons/18+.png')}
								style={{ borderRadius: 16, alignSelf: 'center', marginTop:10 }}
							/>
					<p
						style={{
							fontSize: 13,
							color: '#7285A4',
							textAlign: 'center',
							marginLeft: 24,
							marginRight: 24,
						}}
					>
						Внимание! Достигли ли вы 18 летнего возраста?
					</p>
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
							Да, мне есть 18 лет
						</Button>
					</Row>
					<StyledHeading
						style={{
							fontSize: 13,
							textAlign: 'center',
							marginBottom: 20,
						}}
						onClick={() => this.setState({ open1: false })}
					>
						<a href="#home" style={{textDecoration: 'none'}}>Нет, мне меньше 18</a>
					</StyledHeading>
				</Modal>
				<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: 200 }}>
					<p style={{ fontSize: 32, color: '#1E264E', fontWeight: 'bold', marginBottom: 16 }}>
						Категории товаров
					</p>
					<Row xs={2} md={5} lg={5} sm={3}>
						<Col>
							<a href="#home" onClick={(e) => this.setState({ open1: true })}>
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										alt="sale"
										src={require('../assets/icons/sale.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Акции
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										alt="vodka"
										src={require('../assets/icons/vodka.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Водка
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										alt="beer"
										src={require('../assets/icons/beer.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Пиво
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={140}
										height={142}
										alt="wine"
										src={require('../assets/icons/wine.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Вино
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={140}
										height={142}
										alt="coqnac"
										src={require('../assets/icons/cognac.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Коньяк
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="whiskey"
										src={require('../assets/icons/whiskey.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Виски
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="champagne"
										src={require('../assets/icons/champagne.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Шампс
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="rum"
										src={require('../assets/icons/rum.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Ром
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="liquor"
										src={require('../assets/icons/liquor.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Ликер
									</Card.Body>
								</Card>
							</a>
						</Col>
						<Col>
							<a href="/Catalog">
								<Card
									style={{
										height: 'auto',
										width: 'auto',
										marginBottom: 16,
										borderWidth: 0,
										backgroundColor: 'white',
										borderRadius: 16,
									}}
								>
									<img
										width={'100%'}
										height={'100%'}
										alt="snack"
										src={require('../assets/icons/snack.png')}
										style={{
											borderRadius: 16,
											alignSelf: 'center',
											width: '45%',
											height: '45%',
											marginTop: 24,
										}}
									/>
									<Card.Body
										style={{
											fontSize: 18,
											color: '#1E264E',
											textAlign: 'center',
											marginBottom: 20,
										}}
									>
										Закуск
									</Card.Body>
								</Card>
							</a>
						</Col>
					</Row>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Main;
