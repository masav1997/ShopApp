import React from 'react';
import { Row } from 'react-bootstrap';
import MainCategoryCard from './MainCategoryCard';
import DropdownBlock from './Dropdown';

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
	state = {
		isRow: false,
	};
	render() {
		const { isRow } = this.state;
		const { title } = this.props;
		return (
			<div style={containerStyle}>
				<p style={titleStyle}>{title}</p>
				<Row style={{ marginTop: 10, marginLeft: -10 }}>
					<DropdownBlock
						title={isRow ? 'Списком' : 'Сеткой'}
						onClick={(e) => this.setState({ isRow: true })}
						onClick1={(e) => this.setState({ isRow: false })}
					/>
				</Row>
				<Row xs={isRow ? 1 : 1} md={isRow ? 1 : 3} lg={isRow ? 1 : 4} sm={isRow ? 1 : 2}>
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/sale.png')} title="Акции и скидки" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/vodka.png')} title="Водка" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/beer.png')} title="Пиво" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/wine.png')} title="Вино" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/cognac.png')} title="Коньяк" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/whiskey.png')} title="Виски" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/champagne.png')} title="Шампанское" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/rum.png')} title="Ром" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/liquor.png')} title="Ликер" />
					<MainCategoryCard href="/Catalog" img={require('../assets/icons/snack.png')} title="Закуски" />
				</Row>
			</div>
		);
	}
}

export default MainCard;
