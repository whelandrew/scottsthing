import React from 'react';
import {Route, withRouter} from 'react-router-dom';

import './App.css';
import title from './Resources/siteTitle.png';

import Home from './Home';
import Products from './Products';
import Projects from './Projects';
import About from './About';
import ShoppingCart from './ShoppingCart';

class App extends React.Component 
{	
	render()
	{
		return (
			<div className="App">
				<header className="mainHeader">				
				<div>
					<a id="shoppingCart" href="/shoppingCart"> <i className="fa fa-shopping-cart"></i> </a>
					<p>			
						<a href="/">Home</a>
						<a href="/products">Products</a>
						<a href="/projects">Projects</a>
						<a href="/about">About</a>
						<a href="https://www.etsy.com/" target="_blank">Etsy</a>
					</p>
				</div>				
				</header>
				<div className="mainImage">
					<img src={title} alt="logo"/>
				</div>	
				<div className = "mainBody">			
					<Route exact path='/' component={Home}/>
					<Route exact path='/products' component={Products}/>
					<Route exact path='/projects' component={Projects}/>
					<Route exact path='/about' component={About}/>
					<Route exact path='/shoppingCart' component={ShoppingCart}/>
				</div>
				<footer className="footer">
					<p>
						<a href="/">Home</a>
						<a href="mailto:scott@scott.scott">scott@scott.scott</a>
						<a href="">867-5309</a>
						<a href="https://www.etsy.com/" target="_blank"><i className="fab fa-etsy"></i></a>
					</p>
				</footer>
			</div>
		);
	}
}

export default withRouter(App);
