import React from 'react';
import { Row } from 'react-bootstrap';
import MainCategoryCard from './MainCategoryCard';

const containerStyle = {
	margin: 15,
	marginLeft: '5%',
	marginRight: '5%',
	marginBottom: 200,
};

const titleStyle = {
	fontSize: 32,
	color: '#1E264E',
	fontWeight: 'bold',
	marginBottom: 16,
};

class MainCard extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<div style={containerStyle}>
				<p style={titleStyle}>{title}</p>
				<Row xs={2} md={5} lg={5} sm={3}>
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/sale.png')} title="Акции" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/vodka.png')} title="Водка" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/beer.png')} title="Пиво" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/wine.png')} title="Вино" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/cognac.png')} title="Коньяк" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/whiskey.png')} title="Виски" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/champagne.png')} title="Шампс" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/rum.png')} title="Ром" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/liquor.png')} title="Ликер" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/snack.png')} title="Закуск" />
				</Row>
			</div>
		);
	}
}

export default MainCard;
