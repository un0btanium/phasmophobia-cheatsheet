import React, {Component} from 'react';

import { Container, Row, Col, Form } from 'react-bootstrap';


export default class MainGridPage extends Component {
	
	render () {

		let selectedColor = "grey";

		let styleEvidenceHeader			= { minWidth: "400px",	textAlign: "left", margin: "5px" };
		let styleGhostHeader			= { minWidth: "0px",	textAlign: "center", minHeight:"60px", color: selectedColor };
		let styleGhostHeaderSelected	= { minWidth: "0px",	textAlign: "center", minHeight:"60px", color: "white" };
		let styleGhostDefault			= { minWidth: "0px",	textAlign: "center", margin: "5px", color: selectedColor };
		let styleGhostSelected			= { minWidth: "0px",	textAlign: "center", margin: "5px", color: "white"};

		// PRIMARY EVIDENCE GRID 
		let grid = this.props.data.primaryevidence.map((evidence) => {

			let rowHeader = <Col style={styleEvidenceHeader}>{evidence}</Col>;

			let row = this.props.ghostNames.map((ghostName) => {
				return <Col
					style={(this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName]) ? styleGhostSelected : styleGhostDefault}
					key={"col-" + ghostName + "-" + evidence}
				>
					{this.props.ghostHasEvidence[ghostName][evidence] ? "X" : ""}
				</Col>

			});


			let rowStyle = { width:"100%", cursor:"pointer" }
			if (this.props.selectedEvidence[evidence]) {
				rowStyle["backgroundColor"] = "#177326";
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
		let secondaryEvidenceGrid = null;
		if (this.props.selectedEvidenceAmount > 1 || this.props.selectedSecondaryEvidenceAmount > 0 || this.props.showAllSecondaryEvidence) {
			secondaryEvidenceGrid = this.props.data.secondaryevidence.map((evidence) => {
				let isVisible = false;
				for (let ghostName of this.props.ghostNames) {
					// console.log(ghostName, this.props.selectedGhosts[ghostName], this.props.ghostHasEvidence[ghostName][evidence])
					if (this.props.selectedGhosts[ghostName] && this.props.ghostHasEvidence[ghostName][evidence]) {
						isVisible = true;
						break;
					}
				}

				if (isVisible || this.props.showAllSecondaryEvidence) {
					let rowHeader = <Col style={styleEvidenceHeader}  key={"header-" + evidence}>{evidence}</Col>;
		
					let row = this.props.ghostNames.map((ghostName) => {
						return <Col
							style={(this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName]) ? styleGhostSelected : styleGhostDefault}
							key={"col-" + ghostName + "-" + evidence}
						>
							{this.props.ghostHasEvidence[ghostName][evidence] ? "X" : ""}
						</Col>
		
					});
		
		
					let rowStyle = { width:"100%", cursor:"pointer" }
					if (this.props.selectedEvidence[evidence]) {
						rowStyle["backgroundColor"] = "#177326";
					}
		
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
			return <Col style={(this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName]) ? styleGhostHeaderSelected : styleGhostHeader} key={"header-" + ghostName}><div className="rotated45">{ghostName}</div></Col>
		});

		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<Container style={{ padding:"0", margin:"20px", maxWidth:"100000px"}}>
					<Row style={{ width:"100%" }}>
						<Col style={styleEvidenceHeader}>EVIDENCE</Col>
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
						<Row style={{ width:"100%", marginTop: "50px" }}>
							<Col style={styleEvidenceHeader}>SECONDARY EVIDENCE</Col>
						</Row>
					}
					{secondaryEvidenceGrid}
				</Container>
			</div>
		</div>
	}

}