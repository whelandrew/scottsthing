import React from "react";
import Slider from "react-slick";

import "./Home.css";

import "./slick.css";
import "./slick-theme.css";

import Photo1 from './Resources/photo_2020-06-05_09-51-51.jpg';
import Photo2 from './Resources/photo_2020-06-05_09-52-32.jpg';
import Photo3 from './Resources/photo_2020-06-05_09-52-36.jpg';
import Photo4 from './Resources/photo_2020-06-05_09-52-40.jpg';
import Photo5 from './Resources/photo_2020-06-05_09-53-50.jpg';
import Photo6 from './Resources/photo_2020-06-05_09-54-08.jpg';

export default class Home extends React.Component 
{		
	
	render() 
	{		
		let slideSettings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			speed: 500,
			autoplaySpeed: 3000,
			cssEase: "linear",
			fade: true,
			centerMode: true,
			arrows: true
		};
		
		return (				
			<div id="Home">
				<h1>Check Out This Fucking Furniture!</h1>			
				<Slider key="slider" id='SliderMain' {...slideSettings}>								
						<img src={Photo1} alt="The Product"/>                
						<img src={Photo2} alt="The Product"/>                
						<img src={Photo3} alt="The Product"/>                
						<img src={Photo4} alt="The Product"/>                
						<img src={Photo5} alt="The Product"/>                
						<img src={Photo6} alt="The Product" />                
					</Slider>
			</div>
		);	
	}
}