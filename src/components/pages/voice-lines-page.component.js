import React, {Component} from 'react';

import { Container, Row, Col } from 'react-bootstrap';


export default class VoiceLinesPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = { width: window.innerWidth, height: window.innerHeight };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	  
	componentDidMount() {
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}

	render () {

		let colStyle = { marginTop: "5px", marginLeft: "5px" };


		let getCol = (l, index) => {
			if (index < l.length) {
				return <Col style={colStyle} key={"voiceline-" + l[index]}>
					{l[index]}
				</Col>;
			} else {
				return <Col></Col>;
			}
		}

		let addRowToList = (index) => {
			return <Row key={"voicelines-row-" + index}>
				{getCol(this.props.data.voicelines.general, index)}
				{getCol(this.props.data.voicelines.ouija, index)}
				{getCol(this.props.data.voicelines.spiritbox, index)}
				{getCol(this.props.data.voicelines.attacktrigger, index)}
			</Row>
		}

		if (this.state.width > 1000) {
			let list = [];
			let index = 0;
			let length = Math.max(this.props.data.voicelines.general.length, this.props.data.voicelines.ouija.length, this.props.data.voicelines.spiritbox.length, this.props.data.voicelines.attacktrigger.length);
			while (index < length) {
				list.push(addRowToList(index++));
			}
			
			// HEADER ROW
			let columnHeaders = ["General Questions", "Ouija Board Questions", "Spirit Box Questions", "Anger and Attack Trigger Words"].map((title, index) => {
				return <Col key={"header-" + title}><h3>{title}</h3></Col>
			});


			return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
				<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
					<Container style={{ padding:"0", margin:"20px", maxWidth: "90%"}}>
						<Row style={{ width:"100%" }}>
							{columnHeaders}
						</Row>
						{list}
					</Container>
				</div>
			</div>
		} else {
			let list = [];
			let headerNames = { general: "General Questions", ouija: "Ouija Board Questions", spiritbox: "Spirit Box Questions", attacktrigger: "Anger and Attack Trigger Words"};
			for (let voicelineName in this.props.data.voicelines) {
				console.log(voicelineName)
				let voicelineList = [];
				voicelineList.push(<Col key={"header-" + headerNames[voicelineName]} style={{ marginTop: "35px" }}><h3>{headerNames[voicelineName]}</h3></Col>);
				for (let index = 0; index < this.props.data.voicelines[voicelineName].length; index++) {
					voicelineList.push(getCol(this.props.data.voicelines[voicelineName], index));
					index++;
				}
				list.push(voicelineList);
			}

			return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
				<div style={{ display: "flex", margin: "25px 0px 15px 0px" }}>
					<Container style={{ marginLeft: "20px" }}>
						{list}
					</Container>
				</div>
			</div>
		}
	}

}