import React from 'react';
import 'antd/dist/antd.css';

import { Anchor } from 'antd';

const { Link } = Anchor;

function HeaderSection() {
	return (
		<div className="container-fluid">
			<div className="header">
				<div className="logo">
					<i className="fas fa-gamepad"></i>
					<span id="webName">U&V</span>
				</div>
				<div className="anchor">
					<Anchor targetOffset="85">
						<Link href="#home" title="Home" />
						<Link href="#about" title="About" />
						<Link href="#video-game" title="Video Games" />
						<Link href="#gallery" title="Gallery" />
					</Anchor>
				</div>
			</div>
		</div>
	);
}

export default HeaderSection;
