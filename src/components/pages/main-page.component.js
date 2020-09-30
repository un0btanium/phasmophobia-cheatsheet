import React, {Component} from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';


export default class MainGridPage extends Component {
	
	render () {

		// PRIMARY EVIDENCE GRID 
		let grid = this.props.data.primaryevidence.map((evidence, index) => {

			let rowHeader = <Col className={"evidence-header" + (this.props.remainingEvidence[evidence] ? "" : " grey")}>{evidence}</Col>;

			let row = this.props.ghostNames.map((ghostName) => {
				let rowTextColor = " grey";
				if (!this.props.ignoredGhosts[ghostName] && (this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName])) {
					rowTextColor = "";
				}
				return <Col
					className={"ghost-evidence" + rowTextColor}
					key={"col-" + ghostName + "-" + evidence}
				>
					{this.props.ghostHasEvidence[ghostName][evidence] ? "X" : ""}
				</Col>
			});


			let rowClassName = "evidence-row";
			if (this.props.selectedEvidence[evidence]) {
				rowClassName += " green-background";
			} else if (this.props.ignoredEvidence[evidence]) {
				rowClassName += " red-background";
			} else if (index % 2 === 0) {
				rowClassName += " darkgrey-background";
			}
			return <Row
				className={rowClassName}
				onClick={(e) => this.props.onEvidenceClick(e, evidence)}
				onContextMenu={(e) => this.props.onEvidenceClick(e, evidence)}
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

				if (isVisible || this.props.ignoredEvidence[evidence] || this.props.selectedEvidence[evidence] || this.props.showAllSecondaryEvidence) {
					let rowHeader = <Col
						className={"evidence-header" + (this.props.remainingEvidence[evidence] ? "" : " grey")}
						key={"header-" + evidence}>{evidence}
					</Col>;
		
					let row = this.props.ghostNames.map((ghostName) => {
						return <Col
							className={"ghost-evidence" + ((this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName]) ? "" : " grey")}
							key={"col-" + ghostName + "-" + evidence}
						>
							{this.props.ghostHasEvidence[ghostName][evidence] ? "X" : ""}
						</Col>
		
					});
		
		
					let rowClassName = "evidence-row";
					if (this.props.selectedEvidence[evidence]) {
						rowClassName += " green-background";
					} else if (this.props.ignoredEvidence[evidence]) {
						rowClassName += " red-background";
					} else if (index % 2 === 0) {
						rowClassName += " darkgrey-background";
					}
					index++;
					return <Row
						className={rowClassName}
						onClick={(e) => this.props.onEvidenceClick(e, evidence)}
						onContextMenu={(e) => this.props.onEvidenceClick(e, evidence)}
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
			let additionalStyle = " grey"
			if (!this.props.ignoredGhosts[ghostName] && (this.props.selectedEvidenceAmount === 0 || this.props.selectedGhosts[ghostName])) {
				additionalStyle = "";
			}
			if (this.props.selectedGhostAmount === 1 && this.props.selectedGhosts[ghostName]) {
				additionalStyle = " green";
			}
			return <Col className={"ghost-header" + additionalStyle} key={"header-" + ghostName}><div className="rotated45">{ghostName}</div></Col>
		});

		return <div style={{ display: "inline-block", width: "100%", height:"100%"}}>
			<div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "25px 0px 15px 0px" }}>
				<Container style={{ padding:"0", margin:"20px", marginTop: "0px", maxWidth:"100000px"}}>
					<Row>
						<Col style={{ textAlign:"center" }}>
							<b>Leftclick: Select/Unselect Evidence.<br/>Rightclick: Ignore/Unignore Evidence.</b>
						</Col>
					</Row>
					<Row>
						<Col className={"evidence-header"}>
							<Button variant="danger" onClick={() => this.props.resetSelected()}>Unselect All Evidence</Button>
						</Col>
					</Row>
					<Row style={{ width:"100%" }}>
						<Col className={"evidence-header"}>EVIDENCE</Col>
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
							<Col className={"evidence-header"}>SECONDARY EVIDENCE</Col>
						</Row>
					}
					{secondaryEvidenceGrid}
				</Container>
			</div>
		</div>
	}

}