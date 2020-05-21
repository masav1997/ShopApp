import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import AboutRowTable from './AboutRowTable';

const titleStyle = {
	fontSize: 18,
	color: '#1E264E',
};

const cardStyle = {
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
};

const cardStyle1 = {
	width: '100%',
	height: 'auto',
	borderRadius: 0,
	borderWidth: 0,
	backgroundColor: '#E5E5E5',
	marginLeft: 0,
};

class AboutTable extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<div>
				<p style={titleStyle}>{title}</p>
				<Row xs={2} md={2} lg={2} sm={2}>
					<Col>
						<Card style={cardStyle}>
							<AboutRowTable title="Объем, л" description="0,5" />
							<AboutRowTable title="Количество штук в упаковке" description="24" />
							<AboutRowTable title="Крепость" description="4.4%" />
							<AboutRowTable title="Цвет" description="Светлое" />
							<AboutRowTable title="Упаковка" description="Жестяная банка" />
							<AboutRowTable title="Тип" description="Фильтрованное" />
						</Card>
					</Col>
					<Col>
						<Card style={cardStyle1}>
							<AboutRowTable title="Пивоварня" description="Plzensky Prazdroj" />
							<AboutRowTable title="Вид" description="Пилснер (Pilsner)" />
							<AboutRowTable title="Размеры" description="ящик: 404 x 268 x 171 мм" />
							<AboutRowTable title="Страна-производитель товара" description="Чехия" />
							<AboutRowTable title="Страна регистрации бренда" description="Чехия" />
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

export default AboutTable;
