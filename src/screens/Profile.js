import React from 'react';

import { Row } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard';
import ProfileSystemCard from '../components/ProfileSystemCard';

class Basket extends React.Component {
	render() {
		return (
				<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: '30%' }}>
					<Row xs={1} md={1} lg={2} sm={1}>
						<ProfileCard/>
						<ProfileSystemCard />
					</Row>
				</div>
		);
	}
}

export default Basket;
