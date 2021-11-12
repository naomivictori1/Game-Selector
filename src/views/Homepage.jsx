import React from 'react';
import HomeHero from '../components/Home/HomeHero';
import About from '../components/Home/About';
import VideoGameSection from '../components/Home/VideoGamesSection';
import FooterSection from '../components/FooterSection';
import Gallery from '../components/Home/Gallery';

function Homepage() {
	return (
		<div className="heroBlock">
			<HomeHero />
			<About />
			<VideoGameSection />
			<Gallery />
			<FooterSection />
		</div>
	);
}

export default Homepage;
