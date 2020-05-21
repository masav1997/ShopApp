import React from 'react';

import { Row } from 'react-bootstrap';
import BasketProductCard from '../components/BasketProductCard';
import BasketRegCard from '../components/BasketRegCard';

class Basket extends React.Component {
	render() {
		return (
			<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: '30%' }}>
				<Row xs={1} md={1} lg={2} sm={1}>
					<BasketProductCard
						title="Товары в корзине"
						img={require('../assets/icons/pic4.png')}
						title1="Коньяк Gautier XO 0.7 л 40% в подарочной упаковке"
						type="0.5 л, Стекляная бутылка"
						min="1"
						max="10"
					/>
					<BasketRegCard title="Оформление" />
				</Row>
			</div>
		);
	}
}

export default Basket;
