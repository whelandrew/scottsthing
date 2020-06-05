import React from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

import Photo1 from './Resources/photo_2020-06-05_09-51-51.jpg';
import Photo2 from './Resources/photo_2020-06-05_09-52-32.jpg';
import Photo3 from './Resources/photo_2020-06-05_09-52-36.jpg';
import Photo4 from './Resources/photo_2020-06-05_09-52-40.jpg';
import Photo5 from './Resources/photo_2020-06-05_09-53-50.jpg';
import Photo6 from './Resources/photo_2020-06-05_09-54-08.jpg';

export default class Products extends React.Component 
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
				  autoplaySpeed: 2000,
				  cssEase: "linear",
				  fade: true
				  
				};
		return (				
			<div id="Products">				
				<h3>This shit is hand-crafted by Scott, himself! Look at that veneer! I don't know what I'm talking about! But, Scott does!</h3>
				<h2> All The Stuff On This Page Is For Sale</h2>
				<div>
					<div className='itemContainer'>
						<Slider key="slider" id='SliderMain' {...slideSettings}>								
							<img src={Photo5} alt="The Product"/>                
							<img src={Photo6} alt="The Product" />                
						</Slider>
						<h3 className="itemTitle">A Bed!</h3>
						<ul className="itemDetails">
							<li>Height: Long</li>
							<li>Width: Wide</li>
							<li>Material: Fucking wood!</li>
							<li>$800</li>
						</ul>
					</div>				
					<div className='itemContainer'>
						<Slider key="slider" id='SliderMain' {...slideSettings}>	
							<img src={Photo1} alt="The Product"/>      
							<img src={Photo2} alt="The Product"/>      
							<img src={Photo3} alt="The Product"/>      
							<img src={Photo4} alt="The Product"/>      
						</Slider>					
						<h3 className="itemTitle">A swinging bench?</h3>
						<ul className="itemDetails">
							<li>Height: Long</li>
							<li>Width: Wide</li>
							<li>Material: Fucking wood!</li>
							<li>$400</li>
						</ul>
					</div>
				</div>
			</div>
		);	
	}
}