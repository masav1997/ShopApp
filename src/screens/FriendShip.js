import React from 'react';

import { Row, Col } from 'react-bootstrap';
import FriendshipCard from '../components/FriendshipCard';

class FriendShip extends React.Component {
	render() {
		return (
			<div style={{ margin: 15, marginLeft: '5%', marginRight: '5%', marginBottom: '45%' }}>
				<Row xs={1} md={2}>
					<FriendshipCard
						title="Партнерство и сотрудничество"
						subtitle="Партнерство и сотрудничество"
						description="Amet velit eiusmod velit commodo laborum eu. Proident adipisicing laboris incididunt
								amet velit amet duis labore voluptate sunt consequat in. Ad minim culpa sunt irure eu
								ullamco nulla Lorem. Duis mollit exercitation deserunt aliqua minim veniam nostrud minim
								sit Lorem magna voluptate nostrud consequat. Ipsum laboris qui sunt amet eiusmod quis
								incididunt nisi irure minim est. Do sunt cillum dolor aliquip exercitation. Id aliqua
								mollit nisi aliqua eiusmod. Veniam irure sint irure Lorem officia do ea."
					/>
					<Col md={2}></Col>
				</Row>
			</div>
		);
	}
}

export default FriendShip;
