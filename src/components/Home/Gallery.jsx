import React from 'react';
import { Carousel } from 'antd';

function Gallery() {
	return (
		<div id="gallery" className="block aboutBlock ">
			<div className="titleHolder">
				<h2>Gallery</h2>
				<p>A slide of our favorite pictures!</p>
			</div>
			<Carousel autoplay>
				<div>
					<img
						className="galleryImages"
						src="/../Images/alago.jpeg"
						style={{ width: '30%' }}
						alt="Algo"
					/>
				</div>
				<div>
					<img
						className="galleryImages"
						src="/../Images/polo.jpeg"
						style={{ width: '30%' }}
						alt="Polo"
					/>
				</div>
			</Carousel>
		</div>
	);
}

export default Gallery;
