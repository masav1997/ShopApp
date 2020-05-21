import React from 'react';

import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import CallMeModal from './CallMeModal';
import SearchBlock from './SearchBlock';

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

const logoStyle = {
	height: 32,
	marginBottom: 10,
	width: '50%',
};

const rowStyle = {
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
	flexShrink: 0,
};

const rowStyle1 = {
	marginBottom: 0,
	marginLeft: 0,
	marginTop: 10,
};

const titleStyle = {
	onsize: 13,
	color: '#5E697F',
	marginBottom: 0,
};

const phoneStyle = {
	height: 10,
	width: 10,
	marginTop: 3,
	marginRight: 6,
};

const iconStyle = {
	height: 20,
	width: 20,
	marginTop: 3,
	marginRight: 10,
};

class Footer extends React.Component {
	state = {
		open2: false,
	};

	render() {
		const { open2 } = this.state;
		return (
			<Row xs={1} md={5} style={rowStyle} className="footer">
				<Col>
					<img src={require('../assets/icons/logo.png')} alt="Logo" style={logoStyle} />
					<SearchBlock />
					<Row xs={1} md={1} lg={2} sm={1}>
						<Col md={12} xs={12} lg={3} sm={12}>
							<p style={{ color: '#FF4C4B', fontSize: 24 }}>18+</p>
						</Col>
						<Col sm={12} md={12} xs={12} lg={9}>
							<p style={{ fonsize: 13, color: '#5E697F' }}>
								Мы не доставляем алкогольную продукцию людям младше 18 лет
							</p>
						</Col>
					</Row>
				</Col>
				<Col>
					<a href="/Catalog">
						<p style={titleStyle}>Виски</p>
					</a>
					<a href="/Catalog">
						<p style={titleStyle}>Водка</p>
					</a>
					<a href="/Catalog">
						<p style={titleStyle}>Пиво</p>
					</a>
					<a href="/Catalog">
						<p style={titleStyle}>Вино</p>
					</a>
				</Col>
				<Col>
					<a href="/Catalog">
						<p style={titleStyle}>Коньяк</p>
					</a>
					<a href="/Catalog">
						<p style={titleStyle}>Шампанское</p>
					</a>
					<a href="/Catalog">
						<p style={titleStyle}>Ром</p>
					</a>
					<a href="/Catalog">
						<p style={titleStyle}>Ликеры</p>
					</a>
				</Col>
				<Col>
					<a href="/Profile">
						<p style={titleStyle}>Вход\регистрация</p>
					</a>
					<a href="/Profile">
						<p style={titleStyle}>Мой профиль</p>
					</a>
					<a href="/Basket">
						<p style={titleStyle}>Корзина</p>
					</a>
					<a href="/FriendShip">
						<p style={titleStyle}>Предложения</p>
					</a>
				</Col>
				<Col>
					<Row style={rowStyle1} onClick={(e) => this.setState({ open2: true })}>
						<img src={require('../assets/icons/phone.png')} alt="Phone" style={phoneStyle} />
						<StyledHeading>8 800 112 02 99</StyledHeading>
						<StyledHeading1> с 11:00 до 20:00</StyledHeading1>
					</Row>
					<p style={titleStyle}>newsite@gmail.com</p>
					<p style={titleStyle}>115280, Москва, ул. Ленинская, 14 47</p>
					<Row style={{ marginBottom: 0, marginLeft: 0, marginTop: 10 }}>
						<img src={require('../assets/icons/telegram.png')} alt="telegram" style={iconStyle} />
						<img src={require('../assets/icons/instagram.png')} alt="instagram" style={iconStyle} />
						<img src={require('../assets/icons/facebook.png')} alt="facebook" style={iconStyle} />
						<img src={require('../assets/icons/twitter.png')} alt="twitter" style={iconStyle} />
					</Row>
				</Col>
				<CallMeModal
					show={open2}
					text="Заполните поля чтобы заказать обратный звонок"
					onHide={() => this.setState({ open2: false })}
					onClick={() => this.setState({ open2: false })}
				/>
			</Row>
		);
	}
}

export default Footer;
