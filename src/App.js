import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './screens/Main';
import ProductList from './screens/ProductList';
import AboutProduct from './screens/AboutProduct';
import Basket from './screens/Basket';
import Profile from './screens/Profile';
import FriendShip from './screens/FriendShip';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {
	return (
		<div style={{ backgroundColor: '#E5E5E5' }}>
			<Header/>
			<Router>
				<Route exact path="/" component={Main}/>
				<Route exact path="/Catalog" component={ProductList}/>
				<Route exact path="/About" component={AboutProduct}/>
				<Route exact path="/Basket" component={Basket}/>
				<Route exact path="/Profile" component={Profile}/>
				<Route exact path="/FriendShip" component={FriendShip}/>
			</Router>
			<Footer/>
		</div>
	);
}

export default App;