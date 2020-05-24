import React from 'react';
import { Col, Row, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

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
class DropdownBlock extends React.Component {
	render() {
		const { title, onClick, onClick1 } = this.props;
		return (
			<Col sm={12} md={12} xs={12} lg={6}>
				<Row>
					<StyledHeading2>Отобразить:</StyledHeading2>
					<Dropdown style={{ marginBottom: 10 }}>
						<Dropdown.Toggle id="dropdown-basic" style={dropTitleStyle}>
							{title}
						</Dropdown.Toggle>

						<Dropdown.Menu style={dropActionStyle}>
							<Dropdown.Item onClick={onClick}>Списком</Dropdown.Item>
							<Dropdown.Item onClick={onClick1}>Сеткой</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Row>
			</Col>
		);
	}
}

export default DropdownBlock;
