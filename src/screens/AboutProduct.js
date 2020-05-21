import React from 'react';
import { Row, Col } from 'react-bootstrap';

import AboutImage from '../components/AboutImage';
import AboutDescription from '../components/AboutDescription';
import AboutButton from '../components/AboutButton';
import AboutTable from '../components/AboutTable';
import ProductCard from '../components/ProductCard';

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
	render() {
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
						<Row xs={1} md={2} lg={2} sm={1} xl={3} style={{ marginTop: 10 }}>
							<ProductCard
								href="/About"
								productImg={require('../assets/icons/pilsner.jpeg')}
								name="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								price="499.28"
							/>
							<ProductCard
								href="/About"
								productImg={require('../assets/icons/jim.jpeg')}
								name="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								price="499.28"
							/>
							<ProductCard
								href="/About"
								productImg={require('../assets/icons/pilsner.jpeg')}
								name="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								price="499.28"
							/>
							<ProductCard
								href="/About"
								productImg={require('../assets/icons/jim.jpeg')}
								name="Упаковка пива Pilsner Urquell светлое фильтрованное 4.4%"
								type="0.5 л, Жестяная банка"
								oldPrice="5050.12 ₽/шт"
								price="499.28"
							/>
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default AboutProduct;
