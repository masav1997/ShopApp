import React from 'react';
import { Row, Col, Accordion, Card, Button, Form } from 'react-bootstrap';

const cardStyle = {
	width: 'auto',
	borderWidth: 0,
	borderRadius: 16,
	backgroundColor: 'white',
};

const cardHeaderStyle = {
	borderWidth: 0,
	backgroundColor: 'white',
};

const accordionTitleStyle = {
	fontSize: 16,
	color: '#1E264E',
	textAlign: 'left',
};

class ProductListFilter extends React.Component {
	render() {
		const { title, opt1, opt2, opt3, key } = this.props;
		return (
			<Accordion defaultActiveKey="0" style={{ marginTop: 20 }}>
				<Card style={cardStyle}>
					<Card.Header style={cardHeaderStyle}>
						<Accordion.Toggle as={Button} variant="link" eventKey={key} style={{ width: '100%' }}>
							<Row>
								<Col md="9" xs="9" style={{ textAlign: 'left' }}>
									<text style={accordionTitleStyle}>{title}</text>
								</Col>
								<Col md="1" xs="1">
									<img src={require('../assets/icons/down.png')} width="12" height="8" alt="Down" />
								</Col>
							</Row>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey={key}>
						<Card.Body style={{ marginTop: -20, marginLeft: 15 }}>
							<Form>
								<Form.Group>
									<Form.Check
										custom
										inline
										name="checkbox"
										id="checkbox-01"
										type={'checkbox'}
										label={opt1}
										style={{ color: '#1E264E' }}
									/>
									<br />
									<Form.Check
										custom
										inline
										name="checkbox"
										id="checkbox-02"
										type={'checkbox'}
										label={opt2}
										style={{ color: '#1E264E' }}
									/>
									<br />
									<Form.Check
										custom
										inline
										name="checkbox"
										id="checkbox-03"
										type={'checkbox'}
										label={opt3}
										style={{ color: '#1E264E' }}
									/>
								</Form.Group>
							</Form>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		);
	}
}

export default ProductListFilter;
