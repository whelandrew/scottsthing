import React from "react";

import "./About.css";

import profilePic from "./Resources/267535_2134988929900_4373226_n.jpg";
import dogPic from "./Resources/photo_2020-06-05_09-54-20(1).jpg";

export default class Projects extends React.Component 
{		
	render() 
	{		
		return (				
			<div id="About">
				<h1> Scott </h1>
				<img src={profilePic} alt='Old-Ass Picture of Scott'/>
				<p> This dork used to climb all over our fucking trees building stuff in them. </p>
				<p> Then he became a really good fucking chef. </p>
				<p> Now he is making really awesome furniture and shit! Buy some of it because
				it will make your house look fucking sweet!</p>

				<h3>Look at this dog!</h3>				
				<img id="DogPic" alt="The Dog" src={dogPic}/>				
				<p>This is the prettiest fucking hound. She is so happy. Scott will make you happy too!</p>
				<p>Go buy his furniture so you can be happy!</p>
			</div>
		);	
	}
}