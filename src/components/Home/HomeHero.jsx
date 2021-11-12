import React from 'react';
import { Carousel } from 'antd';

const Intro = [
	{
		id: 1,
		title: 'Where it all started.',
		content: '',
	},
	{
		id: 2,
		title: 'Instructions',
		content:
			'Maecenas ultricies mi eget mauris pharetra  et ultrices. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus.Odio euismod lacinia at quis risus sed.Ut consequat semper viverra nam libero justo.Tortor at risus viverra adipiscing at in tellus integer.Leo in vitae turpis massa sed elementum.Integer vitae justo eget magna fermentum iaculis eu non diam.',
	},
];

function HomeHero() {
	return (
		<div id="home" className="heroBlock">
			<Carousel>
				{Intro.map((Intro) => {
					return (
						<div className="container-fluid" key={Intro.id}>
							<div className="content">
								<h3>{Intro.title}</h3>
								<p>{Intro.content}</p>
							</div>
						</div>
					);
				})}
			</Carousel>
		</div>
	);
}

export default HomeHero;
