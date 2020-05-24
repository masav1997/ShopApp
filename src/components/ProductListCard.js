import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import DropdownBlock from './Dropdown';

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
	state = {
		isRow: true,
	};

	render() {
		const { isRow } = this.state;
		const { title, dropTitle, dropAction1, dropAction2, dropAction3 } = this.props;
		return (
			<Col sm={12} md={12} xs={12} lg={9}>
				<Row style={{ marginTop: 20 }}>
					<Col sm={12} md={12} xs={12} lg={6}>
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
					</Col>
					<DropdownBlock
						title={isRow ? 'Списком' : 'Сеткой'}
						onClick={(e) => this.setState({ isRow: true })}
						onClick1={(e) => this.setState({ isRow: false })}
					/>
				</Row>
				<Row xs={isRow ? 1 : 2} md={isRow ? 1 : 2} lg={isRow ? 1 : 3} sm={isRow ? 1 : 2}>
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
		);
	}
}

export default ProductListCard;
