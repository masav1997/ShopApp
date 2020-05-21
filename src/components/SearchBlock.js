import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

const formStyle = {
	backgroundColor: '#F3F6F7',
	borderRadius: 8,
	height: 32,
	borderWidth: 0,
	marginBottom: 10,
};

const inputStyle = {
	backgroundColor: '#F3F6F7',
	borderWidth: 0,
	borderRadius: 8,
	paddingRight: 6,
};

const formControlStyle = {
	backgroundColor: '#F3F6F7',
	borderTopRightRadius: 8,
	borderBottomRightRadius: 8,
	height: 32,
	borderWidth: 0,
	paddingLeft: 0,
	width: '100%',
	marginTop: -31,
	marginLeft: 35,
};

const imgStyle = {
	width: 16,
	height: 16,
	marginTop: 3,
};

class SearchBlock extends React.Component {
	render() {
		return (
			<Form style={formStyle}>
				<Form.Group>
					<InputGroup>
						<InputGroup.Prepend>
							<InputGroup.Text style={inputStyle}>
								<img src={require('../assets/icons/search.png')} alt="Search" style={imgStyle} />
							</InputGroup.Text>
						</InputGroup.Prepend>
						<Form.Control type="text" placeholder="поиск" style={formControlStyle} />
					</InputGroup>
				</Form.Group>
			</Form>
		);
	}
}

export default SearchBlock;
