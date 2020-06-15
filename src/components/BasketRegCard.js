import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import BasketRegCardDesc from './BasketRegCardDesc';
import Line from './Line';
import InputForm from './InputForm';
import DropdownForm from './DropdownForm';
import ButtonWithoutImg from './ButtonWithoutImg';
import FinishModal from './FinishModal';

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
	state = {
		pickup: false,
		finish: false,
	};
	render() {
		const { pickup, finish } = this.state;
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
							title="Способ оплаты"
							titleDrop="Онлайн картой на сайте"
							action1="Наличными курьеру"
							action2="Бесконтактная оплата при получении"
						/>
					{!pickup && (
						<DropdownForm
							title="Адрес доставки (город, улица, дом)"
							titleDrop="Москва, ул.Мира, 48"
							action1="Москва, ул.Мира, 48"
							action2="Москва, ул.Мира, 48"
							action3="Москва, ул.Мира, 48"
						/>
					)}
					<Row>
						<Col md={4} xs={4} lg={4} sm={4}>
							<input
								type="checkbox"
								onClick={() => this.setState({ pickup: !this.state.pickup })}
								style={{ marginRight: 5 }}
							/>
							Самовывоз
						</Col>
						<Col md={8} xs={8} lg={8} sm={8}>
							{pickup && (
								<DropdownForm
									title="Пункт самовывоза"
									titleDrop="Москва, ул.Мира, 48"
									action1="Москва, ул.Мира, 48"
									action2="Москва, ул.Мира, 48"
									action3="Москва, ул.Мира, 48"
								/>
							)}
						</Col>
					</Row>
					<Line />
					<ButtonWithoutImg title="Оформить заказ" onClick={() => this.setState({ finish: true })} />
					<FinishModal
						show={finish}
						text="Спасибо за покупку!"
						title="Итоговый чек:"
						description="1000 рублей"
						onHide={() => this.setState({ finish: false })}
						onClick={() => this.setState({ finish: false })}
					/>
				</Card>
			</Col>
		);
	}
}

export default BasketRegCard;
