import React from 'react';
import { Carousel } from 'react-bootstrap';

import MainImageCarousel from './MainImageCarousel';

const carouselStyle = {
	margin: 15,
	marginLeft: '5%',
	marginRight: '5%',
};

class MainCarousel extends React.Component {
	render() {
		return (
			<Carousel controls={true} style={carouselStyle}>
				<Carousel.Item>
				<MainImageCarousel href="/Catalog" image={require('../assets/icons/slider.png')} />
				</Carousel.Item>
				<Carousel.Item>
				<MainImageCarousel href="/Catalog" image={require('../assets/icons/slider.png')} />
				</Carousel.Item>
				<Carousel.Item>
				<MainImageCarousel href="/Catalog" image={require('../assets/icons/slider.png')} />
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default MainCarousel;
