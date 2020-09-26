import React, {Component} from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default class MainGridPage extends Component {
	
	render () {

		let styleEvidenceHeaderDefault	= { minWidth: "400px",	textAlign: "left", margin: "5px", color: "white" };
		let styleEvidenceHeaderGrey		= { minWidth: "400px",	textAlign: "left", margin: "5px", color: "grey" };

		let styleGhostHeaderDefault		= { minWidth: "0px",	textAlign: "center", minHeight:"60px", color: "white" };
		let styleGhostHeaderGrey		= { minWidth: "0px",	textAlign: "center", minHeight:"60px", color: "grey" };
		let styleGhostHeaderResult		= { minWidth: "0px",	textAlign: "center", minHeight:"60px", color: "#05ff37" };
		
		let styleGhostDefault			= { minWidth: "0px",	textAlign: "center", margin: "5px", color: "white"};
		let styleGhostGrey				= { minWidth: "0px",	textAlign: "center", margin: "5px", color: "grey" };

		// PRIMARY EVIDENCE GRID 
		let grid = this.props.data.primaryevidence.map((evidence, index) => {

			let rowHeader = <Col style={this.props.remainingEvidence[evidence] ? styleEvidenceHeaderDefault : styleEvidenceHeaderGrey}>{evidence}</Col>;

			let row = this.props.ghostNames.map((ghostName) => {
				return <Col
					style={(this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName]) ? styleGhostDefault : styleGhostGrey}
					key={"col-" + ghostName + "-" + evidence}
				>
					{this.props.ghostHasEvidence[ghostName][evidence] ? "X" : ""}
				</Col>
			});


			let rowStyle = { width:"100%", cursor:"pointer" }
			if (this.props.selectedEvidence[evidence]) {
				rowStyle["backgroundColor"] = "#177326";
			} else if (index % 2 === 0) {
				rowStyle["backgroundColor"] = "#324254";
			}

			return <Row
				style={rowStyle}
				onClick={(e) => this.props.onEvidenceClick(e, evidence)}
				key={"row-" + evidence}
			>
				{rowHeader}
				{row}
			</Row>;

		});

		
		// SECONDARY EVIDENCE GRID
		let index = 0;
		let secondaryEvidenceGrid = null;
		if (this.props.selectedEvidenceAmount > 1 || this.props.selectedSecondaryEvidenceAmount > 0 || this.props.showAllSecondaryEvidence) {
			secondaryEvidenceGrid = this.props.data.secondaryevidence.map((evidence) => {
				let isVisible = false;
				for (let ghostName of this.props.ghostNames) {
					if (this.props.selectedGhosts[ghostName] && this.props.ghostHasEvidence[ghostName][evidence]) {
						isVisible = true;
						break;
					}
				}

				if (isVisible || this.props.showAllSecondaryEvidence) {
					let rowHeader = <Col style={this.props.remainingEvidence[evidence] ? styleEvidenceHeaderDefault : styleEvidenceHeaderGrey}  key={"header-" + evidence}>{evidence}</Col>;
		
					let row = this.props.ghostNames.map((ghostName) => {
						return <Col
							style={(this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName]) ? styleGhostDefault : styleGhostGrey}
							key={"col-" + ghostName + "-" + evidence}
						>
							{this.props.ghostHasEvidence[ghostName][evidence] ? "X" : ""}
						</Col>
		
					});
		
		
					let rowStyle = { width:"100%", cursor:"pointer" }
					if (this.props.selectedEvidence[evidence]) {
						rowStyle["backgroundColor"] = "#177326";
					} else if (index % 2 === 0) {
						rowStyle["backgroundColor"] = "#324254";
					}
		
					index++;
					return <Row
						style={rowStyle}
						onClick={(e) => this.props.onEvidenceClick(e, evidence)}
						key={"row-" + evidence}
					>
						{rowHeader}
						{row}
					</Row>;
				} else {
					return null;
				}
			});
		}


		// GHOST HEADER ROW
		let columnHeaders = this.props.ghostNames.map((ghostName, index) => {
			let style = styleGhostHeaderGrey;
			
			if (this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName]) {
				style = styleGhostHeaderDefault;
			}

			if (this.props.selectedGhostAmount === 1 && this.props.selectedGhosts[ghostName]) {
				style = styleGhostHeaderResult;
			}
			
			return <Col style={style} key={"header-" + ghostName}><div className="rotated45">{ghostName}</div></Col>
		});

		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<Container style={{ padding:"0", margin:"20px", maxWidth:"100000px"}}>
					<Row>
						<Col style={styleEvidenceHeaderDefault}>
							<Button variant="danger" onClick={() => this.props.resetSelected()}>Unselect All Evidence</Button>
						</Col>
					</Row>
					<Row style={{ width:"100%" }}>
						<Col style={styleEvidenceHeaderDefault}>EVIDENCE</Col>
						{columnHeaders}
					</Row>
					{grid}
					<Form.Check
						id="toggleSecondaryEvidence"
						draggable={false}
						type="checkbox"
						custom="true"
						label="Always show all Secondary Evidence"
						checked={this.props.showAllSecondaryEvidence}
						style={{ margin: "15px"}}
						onChange={(e) => this.props.toggleSetting("showAllSecondaryEvidence")}
					/>
					{secondaryEvidenceGrid !== null &&
						<Row style={{ width:"100%", marginTop: "25px" }}>
							<Col style={styleEvidenceHeaderDefault}>SECONDARY EVIDENCE</Col>
						</Row>
					}
					{secondaryEvidenceGrid}
				</Container>
			</div>
		</div>
	}

}