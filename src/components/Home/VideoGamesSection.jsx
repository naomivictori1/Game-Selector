import React, { useState } from 'react';
import { Button, message } from 'antd';
import { Row, Col } from 'antd';
import Games from '../Games';
import ModalView from './ModalView';
import GameEntry from '../GameEntry';

function VideoGameSection() {
	const [currentVideoID, setCurrentVideoID] = useState('');

	const chooseGame = () => {
		var randomGameTitle = [
			'Gears 5',
			'Halo',
			'Hellblade',
			'It takes two',
			'A Plague Tale',
			'Psychonauts',
			'Twelve Minutes',
			'Ori',
			'Streets of Rage',
			'Last of Us',
			'Boodborne',
			'Geenshin Impact',
			'Dragon Ball Z:KAKAROT',
			'Ghost Tsushima',
			'Naruto',
			'Overcooked',
			'Horizon',
			'Tomb Raider',
			'Uncharted',
			'Person 5 Royal',
			'Ratchet',
			'Spider-Man',
		];

		var randomIndex = Math.floor(Math.random() * randomGameTitle.length);

		return message.info(
			'The game you will play is: ' + randomGameTitle[randomIndex] + '.',
		);
	};

	return (
		<div id="video-game" className="block bgGray">
			<div className="container-fluid">
				<div className="titleHolder">
					<h2>Video Games</h2>
					<p>A list of current games</p>
					<div className="site-button-ghost-wrapper">
						<Button
							className="gameButton"
							type="primary"
							danger
							ghost
							onClick={chooseGame}
						>
							Pick for me
						</Button>
					</div>
				</div>
				<Row gutter={[16, 24]}>
					{Games.map((videogame, i) => (
						<Col span={8}>
							<GameEntry
								id={i}
								key={i}
								title={videogame.title}
								imgURL={videogame.imgURL}
								description={videogame.console}
								videoID={videogame.videoID}
								showModal={setCurrentVideoID}
							/>
						</Col>
					))}
					<ModalView
						videoID={currentVideoID}
						handleClose={() => setCurrentVideoID('')}
						handleCancel={() => setCurrentVideoID('')}
						isModalVisible={!!currentVideoID}
					/>
				</Row>
			</div>
		</div>
	);
}

export default VideoGameSection;
