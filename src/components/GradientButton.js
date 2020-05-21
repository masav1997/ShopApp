import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
	font-size: 13px;
	background: -webkit-gradient(linear, left top, right top, from(#63b9ed), to(#043e85));
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-box-decoration-break: clone;
	box-decoration-break: clone;
	text-shadow: none;
`;

const titleStyle = {
	fontSize: 13,
	textAlign: 'center',
	marginBottom: 20,
};

class GradientButton extends React.Component {
	render() {
		const { onClick, title } = this.props;
		return (
			<StyledHeading style={titleStyle} onClick={onClick}>
				<a href="#home" style={{ textDecoration: 'none' }}>
					{title}
				</a>
			</StyledHeading>
		);
	}
}

export default GradientButton;
