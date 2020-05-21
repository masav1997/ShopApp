import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const StyledHeading2 = styled.h1`
	font-size: 13px;
	background: #1e264e;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
	text-shadow: none;
	margin-left: 1em;
`;

const dropTitleStyle = {
	backgroundColor: '#E5E5E5',
	borderColor: '#E5E5E5',
	color: '#043E85',
	fontSize: 13,
	marginTop: -10,
};

const dropActionStyle = {
	backgroundColor: '#E5E5E5',
	borderColor: '#E5E5E5',
	color: '#043E85',
	fontSize: 13,
};

class ProductListCard extends React.Component {
	render() {
		const { title, dropTitle, dropAction1, dropAction2, dropAction3 } = this.props;
		return (
			<Col sm={12} md={12} xs={12} lg={9}>
				<Row>
					<StyledHeading2>{title}</StyledHeading2>
					<Dropdown style={{ marginBottom: 10 }}>
						<Dropdown.Toggle id="dropdown-basic" style={dropTitleStyle}>
							{dropTitle}
						</Dropdown.Toggle>

						<Dropdown.Menu style={dropActionStyle}>
							<Dropdown.Item href="#/action-1">{dropAction1}</Dropdown.Item>
							<Dropdown.Item href="#/action-2">{dropAction2}</Dropdown.Item>
							<Dropdown.Item href="#/action-3">{dropAction3}</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Row>
				<Row xs={1} md={2} lg={3} sm={1} style={{ marginTop: 10 }}>
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
		);
	}
}

export default ProductListCard;
