import React from 'react';

import { Row, Col } from 'react-bootstrap';
import ProductListCard from '../components/ProductListCard';
import ProductListFilter from '../components/ProductListFilter';

const containerStyle = {
	margin: 15,
	marginLeft: '5%',
	marginRight: '5%',
	marginBottom: 180,
};

const titleStyle = {
	fontSize: 32,
	color: '#1E264E',
	fontWeight: '600',
};

class ProductList extends React.Component {
	render() {
		return (
			<div style={containerStyle}>
				<h2 style={titleStyle}>Вина</h2>
				<Row xs={1} md={1} lg={2} sm={1} className="flex-wrap-reverse">
					<ProductListCard
						title="Сортировка:"
						dropTitle="От дешёвых к дорогим"
						dropAction1="От дорогих к дешёвым"
						dropAction2="По рейтингу"
						dropAction3="По популярности"
					/>
					<Col md={12} xs={12} lg={3} sm={12}>
						<Row style={{ justifyContent: 'flex-end', marginRight: 10 }}>
							<a href="/Catalog">
								<img width={20} height={20} alt="close" src={require('../assets/icons/close.png')} />
								<text style={{ fonsize: 14, color: '#5E697F', marginBottom: 0 }}>Очистить фильтры</text>
							</a>
						</Row>
						<ProductListFilter title="Типы вина" opt1="Белое" opt2="Красное" opt3="Розовое" key="0" />
						<ProductListFilter title="Торговая марка" opt1="Белое" opt2="Красное" opt3="Розовое" key="1" />
						<ProductListFilter title="Сочетание" opt1="Белое" opt2="Красное" opt3="Розовое" key="2" />
						<ProductListFilter title="Вкус" opt1="Белое" opt2="Красное" opt3="Розовое" key="3" />
						<ProductListFilter title="Упаковка" opt1="Белое" opt2="Красное" opt3="Розовое" key="4" />
					</Col>
				</Row>
			</div>
		);
	}
}

export default ProductList;
