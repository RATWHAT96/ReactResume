import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection/HeroSection.js';
import Form from './components/Form/Form.js';
import ImageSlider from './components/Projects/ImageSlider.js';
import { SliderData } from './components/Projects/SliderData.js';
import PostOne from './components/Education/PostsOne';
import Footer from './components/Footer';


function App() {
	return ( 
		<>
			<div><HeroSection /></div>
			<div id="EandE">
				<div className="EaEHeading">
					<h1 class="eHead">Projects</h1>
				</div>
				<ImageSlider slides={SliderData} />
				<ImageSlider slides={SliderData} />
				<ImageSlider slides={SliderData} />
			</div>
			<div className="proj">
				<div className="EaEHeading">
					<h1 class="eHead">Languages & Technologies</h1>
				</div>
				<PostOne/>
			</div>
			<div id="aboutMe">
				<div className="EaEHeading">
					<h1 class="eHead">About Me</h1>
				</div>
				<div class="aboutMeContent">
					<div className="aboutMeBox">
						<div class="contentLeft">
							<image src={'./Me.jpg'}></image>
						</div>
						<div className="contentMiddle"></div>
						<div class="contentRight">
							<p>							
								My name is Rahul Ratwatte and I started my journey as a software engineer in 2019 after a friend recommended freelance web development. 
								After creating my first website I was hooked and I was committed to pursue a career as a software engineer. 
								Programming offers me the opportunity to constantly face new challenges and think creatively to solve problems.  
								Since then I have completed a <span style={{color:"orange"}}>Master's in Computer Science from the University of Bath</span> in 2020, which provided me with core knowledge on the principles of programming, cybersecurity, machine learning, databases and UI design. 
								I have been focusing on creating web applications since I graduated and I focus on ensuring that they are secure, swift and user friendly.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="black">
				<svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
					<path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
				</svg>
			</div>
			<Form />
			<Footer/>
		</>
	);
}
export default App;