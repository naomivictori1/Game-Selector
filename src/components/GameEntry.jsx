import React from 'react';
import { Card, Button } from 'antd';

const { Meta } = Card;

function GameEntry(props) {
	return (
		<div>
			<Card
				className="gameCard"
				hoverable
				cover={<img className="cardImg" alt={props.title} src={props.imgURL} />}
			>
				<div className="cardTitle">
					<Meta title={props.title} description={props.description} />
				</div>
				<>
					<Button
						className="trailerButton"
						type="primary"
						block
						style={{
							color: '#fff',
							borderColor: '#fff',
							backgroundColor: '#e6544f',
						}}
						onClick={() => props.showModal(props.videoID)}
					>
						Click for trailer
					</Button>
				</>
			</Card>
		</div>
	);
}

export default GameEntry;
