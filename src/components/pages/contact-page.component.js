import React, {Component} from 'react';


export default class ContactPage extends Component {
	
	render () {
		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ margin: "auto", width: "600px", backgroundColor: "#4e5d6c", borderRadius: "5px", textAlign: "justify", marginTop: "100px", boxShadow: '2px 2px 5px #000000' }}>
				<div className="fadeIn" style={{margin: "5px", padding: "30px"}}>
					<h2 style={{ textAlign: "center"}}>Contact</h2>
					<br/>
					<p>Hi, I am unobtanium. I created this project in my freetime. You can find the project repository with the source code on my GitHub page <a href="https://github.com/un0btanium/phasmophobia-cheatsheet">here</a>.</p>
					<p>If you want to send me some feedback, feel free to write me an <a href="mailto:unobtaniumlol@gmail.de?subject=Phasmophobia-Cheatsheet%20Feedback">eMail</a>.</p>
				</div>
			</div>
		</div>
	}
}