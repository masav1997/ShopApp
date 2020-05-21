import React from 'react';
import { Dropdown } from 'react-bootstrap';

const titleStyle = {
	fontSize: 13,
	color: '#7285A4',
	marginBottom: 4,
};

const dropStyle = {
	backgroundColor: '#F3F6F7',
	borderRadius: 8,
	borderColor: '#F3F6F7',
	marginBottom: 20,
	color: '#1E264E',
	width: '100%',
};

const dropActionStyle = {
	backgroundColor: '#F3F6F7',
	borderColor: '#F3F6F7',
	color: '#043E85',
	fontSize: 13,
	width: '100%',
};

class DropdownForm extends React.Component {
	render() {
		const { title, titleDrop, action1, action2, action3 } = this.props;
		return (
			<div>
				<p style={titleStyle}>{title}</p>
				<Dropdown style={{ marginBottom: 10 }}>
					<Dropdown.Toggle id="dropdown-basic" style={dropStyle}>
						{titleDrop}
					</Dropdown.Toggle>

					<Dropdown.Menu style={dropActionStyle}>
						<Dropdown.Item href="#/action-1">{action1}</Dropdown.Item>
						<Dropdown.Item href="#/action-2">{action2}</Dropdown.Item>
						<Dropdown.Item href="#/action-3">{action3}</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}
}

export default DropdownForm;
