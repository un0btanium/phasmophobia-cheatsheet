import React, {Component} from 'react';

import { Container, Row, Col } from 'react-bootstrap';


export default class VoiceLinesPage extends Component {
	
	render () {

		let colStyle = { marginTop: "5px" };


		let list = [];

		let getCol = (l, index) => {
			if (index < l.length) {
				return <Col style={colStyle}>
					{l[index]}
				</Col>;
			} else {
				return <Col></Col>;
			}
		}

		let addRowToList = (index) => {
			return <Row>
				{getCol(this.props.data.voicelines.general, index)}
				{getCol(this.props.data.voicelines.ouija, index)}
				{getCol(this.props.data.voicelines.spiritbox, index)}
			</Row>
		}

		let index = 0;
		let length = Math.max(this.props.data.voicelines.general.length, this.props.data.voicelines.ouija.length, this.props.data.voicelines.spiritbox.length);
		while (index < length) {
			list.push(addRowToList(index++));
		}
		
		// HEADER ROW
		let columnHeaders = ["General Questions", "Ouija Board Questions", "Spirit Box Questions"].map((title, index) => {
			return <Col key={"header-" + title}><h3>{title}</h3></Col>
		});


		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<Container style={{ padding:"0", margin:"20px"}}>
					<Row style={{ width:"100%" }}>
						{columnHeaders}
					</Row>
					{list}
				</Container>
			</div>
		</div>
	}

}