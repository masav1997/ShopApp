import React from 'react';

import MainCarousel from '../components/MainCarousel';
import AgeModal from '../components/AgeModal';
import MainCard from '../components/MainCard';

class Main extends React.Component {
	state = {
		open1: true,
	};

	onChange(e) {
		debugger;
		this.setState({
			checked: e.target.value,
		});
	}

	render() {
		const { open1 } = this.state;
		return (
			<div>
				<MainCarousel />
				<AgeModal
					show={open1}
					text="Внимание! Достигли ли вы 18 летнего возраста?"
					onHide={() => this.setState({ open1: false })}
					onClick={() => this.setState({ open1: false })}
				/>
				<MainCard />
			</div>
		);
	}
}

export default Main;
