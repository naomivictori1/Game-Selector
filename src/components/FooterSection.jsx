import React from 'react';

function FooterSection() {
	const currentYear = new Date().getFullYear();

	return (
		<div className="footerSection">
			<div className="container-fluid">
				<div className="logo">
					<i className="fas fa-gamepad"></i>
					<span id="webName">U&V</span>
				</div>
				<div>Copyright ⓒ {currentYear}</div>
			</div>
		</div>
	);
}
export default FooterSection;
