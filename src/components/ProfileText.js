import React from 'react';

const titleStyle = {
	fontSize: 13,
	color: '#7285A4',
	marginBottom: 0,
};

const descStyle = {
	fontSize: 13,
	color: '#1E264E',
	textAlign: 'left',
};

class ProfileText extends React.Component {
	render() {
		const { title, description } = this.props;
		return (
			<div>
				<p style={titleStyle}>{title}</p>
				<p style={descStyle}>{description}</p>
			</div>
		);
	}
}

export default ProfileText;
