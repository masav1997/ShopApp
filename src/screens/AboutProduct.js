import React from 'react';
import { Row, Col } from 'react-bootstrap';

import AboutImage from '../components/AboutImage';
import AboutDescription from '../components/AboutDescription';
import AboutButton from '../components/AboutButton';
import AboutTable from '../components/AboutTable';
import ProductCard from '../components/ProductCard';
import DropdownBlock from '../components/Dropdown';

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
	marginBottom: 0,
};

class AboutProduct extends React.Component {
	state = {
		isRow1: true,
	};
	render() {
		const { isRow } = this.state;
		return (
			<div style={containerStyle}>
				<Row xs={1} md={2} lg={2} sm={1}>
					<AboutImage img={require('../assets/icons/pilsner.jpeg')} />
					<Col md={9}>
						<AboutDescription
							title="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
							description="0.5 л, Жестяная банка"
							oldPrice="5050.12"
							price="499.28"
							bonus="9653"
						/>
						<AboutButton />
						<AboutTable title="Характеристики" />
						<h2 style={titleStyle}>С этим товаром берут</h2>
						<Row style={{ marginTop: 10, marginLeft: -10 }}>
							<DropdownBlock
								title={isRow ? 'Списком' : 'Сеткой'}
								onClick={(e) => this.setState({ isRow: true })}
								onClick1={(e) => this.setState({ isRow: false })}
							/>
						</Row>
						<Row
							xs={isRow ? 1 : 2}
							md={isRow ? 1 : 2}
							lg={isRow ? 1 : 3}
							sm={isRow ? 1 : 2}
							style={{ marginTop: 10 }}
						>
							<ProductCard
								href="/About"
								productImg={require('../assets/icons/pilsner.jpeg')}
								name="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								type="0.5 л, Жестяная банка sadsa"
								oldPrice="5050.12 ₽/шт sgsf"
								price="499.28 sdfsd"
								width={isRow ? '70%' : '93%'}
								height={isRow ? '70%' : '93%'}
								fontSize={isRow ? 18 : 15}
							/>
							<ProductCard
								href="/About"
								productImg={require('../assets/icons/jim.jpeg')}
								name="Пиво Жигуль"
								type="1 л, Жестянка"
								oldPrice="5050.12"
								price="499.28"
								width={isRow ? '70%' : '93%'}
								height={isRow ? '70%' : '93%'}
								fontSize={isRow ? 18 : 15}
							/>
							<ProductCard
								href="/About"
								productImg={require('../assets/icons/pilsner.jpeg')}
								name="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								price="499.28"
								width={isRow ? '70%' : '93%'}
								height={isRow ? '70%' : '93%'}
								fontSize={isRow ? 18 : 15}
							/>
							<ProductCard
								href="/About"
								productImg={require('../assets/icons/jim.jpeg')}
								name="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								price="499.28"
								width={isRow ? '70%' : '93%'}
								height={isRow ? '70%' : '93%'}
								fontSize={isRow ? 18 : 15}
							/>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default AboutProduct;
