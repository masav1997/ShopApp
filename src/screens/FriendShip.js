import React from 'react';

import { Row, Card, Col } from 'react-bootstrap';
import Header from '../components/header'
import Footer from '../components/footer'

class FriendShip extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checked: '',
		};

		this.onChange = this.onChange.bind(this);
	}

	state = {
		open1: false,
		open2: false,
	};

	onChange(e) {
		debugger;
		this.setState({
			checked: e.target.value,
		});
	}

	render() {
		return (
			<div style={{ backgroundColor: '#E5E5E5' }}>
				<Header/>'
				<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: '45%' }}>
					<Row xs={1} md={2}>
						<Col md={10}>
							<h1 style={{ fontSize: 32, color: '#1E264E', fontWeight: '600' }}>
								Партнерство и сотрудничество
							</h1>
							<Card
								style={{
									height: 'auto',
									width: 'auto',
									marginBottom: 10,
									paddingLeft: 24,
									paddingRight: 24,
									paddingTop: 24,
									borderWidth: 0,
									backgroundColor: 'white',
									borderRadius: 16,
								}}
							>
								<h1 style={{ fontSize: 20, color: '#1E264E', fontWeight: 'bold' }}>
									Партнерство и сотрудничество
								</h1>
								<p style={{ fontSize: 16, color: '#1E264E', fontWeight: '500', textAlign: 'left' }}>
									Amet velit eiusmod velit commodo laborum eu. Proident adipisicing laboris incididunt
									amet velit amet duis labore voluptate sunt consequat in. Ad minim culpa sunt irure
									eu ullamco nulla Lorem. Duis mollit exercitation deserunt aliqua minim veniam
									nostrud minim sit Lorem magna voluptate nostrud consequat. Ipsum laboris qui sunt
									amet eiusmod quis incididunt nisi irure minim est. Do sunt cillum dolor aliquip
									exercitation. Id aliqua mollit nisi aliqua eiusmod. Veniam irure sint irure Lorem
									officia do ea.
								</p>
								<p style={{ fontSize: 16, color: '#1E264E', fontWeight: '500', textAlign: 'left' }}>
									Amet velit eiusmod velit commodo laborum eu. Proident adipisicing laboris incididunt
									amet velit amet duis labore voluptate sunt consequat in. Ad minim culpa sunt irure
									eu ullamco nulla Lorem. Duis mollit exercitation deserunt aliqua minim veniam
									nostrud minim sit Lorem magna voluptate nostrud consequat. Ipsum laboris qui sunt
									amet eiusmod quis incididunt nisi irure minim est. Do sunt cillum dolor aliquip
									exercitation. Id aliqua mollit nisi aliqua eiusmod. Veniam irure sint irure Lorem
									officia do ea.
								</p>
							</Card>
						</Col>
						<Col md={2}></Col>
					</Row>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default FriendShip;
