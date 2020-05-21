import React from 'react';
import { Col, Card } from 'react-bootstrap';
import BasketRegCardDesc from './BasketRegCardDesc';
import Line from './Line';
import InputForm from './InputForm';
import DropdownForm from './DropdownForm';
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

class BasketRegCard extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<Col md={12} xs={12} lg={4} sm={12}>
				<h2 style={titleStyle}>{title}</h2>
				<Card style={cardStyle}>
					<BasketRegCardDesc title="Товаров:" desc="8" />
					<BasketRegCardDesc title="Итоговая цена:" desc="9653.04 ₽" />
					<Line />
					<InputForm title="ФИО" />
					<InputForm title="Почта" />
					<InputForm title="Номер телефона" />
					<DropdownForm
						title="Адрес доставки (город, улица, дом)"
						titleDrop="Москва, ул.Мира, 48"
						action1="Москва, ул.Мира, 48"
						action2="Москва, ул.Мира, 48"
						action3="Москва, ул.Мира, 48"
					/>
					<Line />
					<ButtonWithoutImg />
				</Card>
			</Col>
		);
	}
}

export default BasketRegCard;
