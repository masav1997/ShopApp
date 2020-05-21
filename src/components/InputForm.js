import React from 'react';
import { Form } from 'react-bootstrap';

const titleStyle = {
	fontSize: 13,
	color: '#7285A4',
	marginBottom: 4,
};

const formStyle = {
	backgroundColor: '#F3F6F7',
	borderRadius: 8,
	borderColor: '#F3F6F7',
	marginBottom: 20,
};

class InputForm extends React.Component {
	render() {
		const { title } = this.props;
		return (
			<div>
				<p style={titleStyle}>{title}</p>
				<Form.Control type="default" style={formStyle} />
			</div>
		);
	}
}

export default InputForm;
