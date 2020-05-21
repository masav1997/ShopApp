import React from 'react';

class MainImageCarousel extends React.Component {
	render() {
		const { image, href } = this.props;
		return (
			<a href={href}>
				<img width={'100%'} height={'80%'} alt="slide3" src={image} style={{ borderRadius: 16 }} />
			</a>
		);
	}
}

export default MainImageCarousel;
