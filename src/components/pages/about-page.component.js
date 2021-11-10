import React, {Component} from 'react';


export default class AboutPage extends Component {
	
	render () {

		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ margin: "auto", width: "600px", backgroundColor: "#4e5d6c", borderRadius: "5px", textAlign: "justify", marginTop: "100px", boxShadow: '2px 2px 5px #000000' }}>
				<div className="fadeIn" style={{margin: "5px", padding: "30px"}}>
					<h2 style={{ textAlign: "center"}}>About Phasmophobia CheatSheet</h2>
					<br/>
					<p>Phasmophobia CheatSheet provides an interactive 2D grid overview about all ghost types and their evidence. Add evidence to rule out ghosts and narrow down your search. If you set your game to Borderless Fullscreen window mode, you can quickly Alt+TAB in and out of your game.</p>
					<p>Special thanks to BotiKis, Redforce04, aschlick, thijnmens & Buguslavv for contributing on GitHub and keeping the project up-to-date.</p>
					<br/>
					<br/>
					<p>Phasmophobia CheatSheet isn’t endorsed by Kinetic Games and doesn’t reflect the views or opinions of Kinetic Games or anyone officially involved in producing or managing Phasmophobia.</p>
				</div>
			</div>
		</div>
	}
}
