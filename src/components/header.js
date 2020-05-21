import React from 'react';

import { Navbar, Nav, Row } from 'react-bootstrap';
import styled from 'styled-components';
import CallMeModal from './CallMeModal';
import SignInModal from './SignInModal';
import SignUpModal from './SignUpModal';
import SearchBlockHeader from './SearchBlockHeader';

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

const logoStyle = {
	height: 32,
	width: 'auto',
};

const rowStyle = {
	marginLeft: 0,
	marginTop: 8,
	marginBottom: -36,
	marginRight: 0,
};

const phoneStyle = {
	height: 10,
	width: 10,
	marginTop: 3,
	marginRight: 6,
};

const timeTextStyle = {
	fontSize: 11,
	marginLeft: 6,
	color: '#7285A4',
};

const navStyle = {
	color: '#000',
	width: 'auto',
	marginBottom: 20,
	marginTop: 20,
};

const iconStyle1 = {
	width: 32,
	height: 32,
};

const iconStyle2 = {
	width: 24,
	height: 24,
	marginTop: 20,
	marginRight: 3,
};

const iconStyle3 = {
	width: 24,
	height: 24,
};

const textStyle = { fontSize: 13, color: '#7285A4', marginLeft: 25, marginTop: -13 };

class Header extends React.Component {
	state = {
		open1: false,
		open2: false,
		open3: false,
	};

	render() {
		const { open1, open2, open3 } = this.state;
		return (
			<div style={{ backgroundColor: '#fff' }}>
				<Navbar bg="white" expand="lg" style={{ paddingBottom: 23 }}>
					<Navbar.Brand href="/" style={{ justifyItems: 'flex-start' }}>
						<img src={require('../assets/icons/logo.png')} alt="Search" style={logoStyle} />
						<Row style={rowStyle}>
							<img src={require('../assets/icons/phone.png')} alt="Phone" style={phoneStyle} />
							<StyledHeading>8 800 112 02 99</StyledHeading>
							<p style={timeTextStyle}>с 11:00 до 20:00</p>
						</Row>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" style={navStyle} />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav style={{ width: '65%' }}>
							<SearchBlockHeader />
						</Nav>
						<Nav.Link href="/Catalog" style={{ fontSize: 13, width: 165 }}>
							<img src={require('../assets/icons/catalog.png')} alt="Search" style={iconStyle1} />
							Каталог
						</Nav.Link>
						<Nav.Link href="/Basket" style={{ fontSize: 13, textAlign: 'left', width: 200 }}>
							<img src={require('../assets/icons/basket.png')} alt="Search" style={iconStyle2} />
							Корзина (5)
							<p style={textStyle}>152,058₽</p>
						</Nav.Link>
						<Nav.Link onClick={(e) => this.setState({ open1: true })} style={{ fontSize: 13, width: 210 }}>
							<img src={require('../assets/icons/profile.png')} alt="Search" style={iconStyle3} />
							Вход / Регистрация
						</Nav.Link>
					</Navbar.Collapse>
				</Navbar>
				<SignUpModal
					show={open1}
					text="Заполните поля чтобы зарегистрироваться на сайте"
					onHide={() => this.setState({ open1: false })}
					onClick={() => this.setState({ open1: false })}
				/>
				<CallMeModal
					show={open2}
					text="Заполните поля чтобы заказать обратный звонок"
					onHide={() => this.setState({ open2: false })}
					onClick={() => this.setState({ open2: false })}
				/>
				<SignInModal
					show={open3}
					text="Введите ваш номер телефона чтобы войти"
					onHide={() => this.setState({ open3: false })}
					onClick={() => this.setState({ open3: false })}
				/>
			</div>
		);
	}
}

export default Header;
