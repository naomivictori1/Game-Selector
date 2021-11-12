import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import HeaderSection from './HeaderSection';
import Homepage from '../views/Homepage';

const { Header, Content } = Layout;

function App() {
	return (
		<Layout className="mainLayout">
			<Header>
				<HeaderSection />
			</Header>
			<Content>
				<Homepage />
			</Content>
		</Layout>
	);
}

export default App;
