import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import MainPage from './components/pages/main-page.component';
import AboutPage from './components/pages/about-page.component';
import ContactPage from './components/pages/contact-page.component';

import data from './phasmophobia-data/data.js';

import logo from "./images/ghost.svg";

const BG = "dark"; // primary, dark, light
const VARIANT = "dark"; // dark, light

// const reloadWindow = () => window.location.reload();


const WEBSITE_URL = "https://un0btanium.github.io/phasmophobia-cheatsheet/";

class App extends Component {


  	constructor(props) {
		super(props);

		let ghostNames = [];
		let ghostsByName = {};
		let selectedGhosts = {};
		let ghostHasEvidence = {};
		let selectedEvidence = {};
		// TODO grey out irrelevant evidence names
		// TODO ignored evidence feature (right mouse click)

		for (let ghost of data.ghosts) {
			selectedGhosts[ghost.name] = false;
			ghostsByName[ghost.name] = ghost;
			ghostNames.push(ghost.name);
		}

		ghostNames.sort((a, b) => {
			if(a < b) { return -1; }
			if(a > b) { return 1; }
			return 0;
		});

		
		for (let evidence of data.primaryevidence) {
			selectedEvidence[evidence] = false;
		}
		
		for (let evidence of data.secondaryevidence) {
			selectedEvidence[evidence] = false;
		}
		

		for (let ghostName of ghostNames) {
			ghostHasEvidence[ghostName] = {};
			for (let evidence of ghostsByName[ghostName].evidence) {
				ghostHasEvidence[ghostName][evidence] = true;
			}
		}
		



		this.onEvidenceClick = this.onEvidenceClick.bind(this);
		this.toggleSetting = this.toggleSetting.bind(this);

		this.state = {
			showAllSecondaryEvidence: false,

			data: data,

			ghostNames: ghostNames,
			ghostsByName: ghostsByName,

			selectedGhosts: selectedGhosts,
			selectedEvidence: selectedEvidence,

			selectedEvidenceAmount: 0,
			selectedSecondaryEvidenceAmount: 0,

			ghostHasEvidence: ghostHasEvidence,
			
			onEvidenceClick: this.onEvidenceClick,
			toggleSetting: this.toggleSetting

		};

	}

  	render() {

		return (
			<Router>
				<div className="full-screenable-node">
					<Navbar bg={BG} variant={VARIANT} expand="xl" style={{ boxShadow: '0px 2px 5px #000000'}}>
						<Navbar.Brand style={{ marginLeft: "15%"}}>
							<a href={"http://" + WEBSITE_URL}>
								<img src={logo} width="35" height="35" alt="Logo" />
								<b>{' Phasmophobia CheatSheet'}</b>
							</a>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "10%"}}>
							<Nav className="mr-auto">
								<Nav.Link as={Link} variant="light" to="/"><b>Cheatsheet</b></Nav.Link>
							</Nav>

							<Nav>
								<Nav.Link as={Link} variant="light" to="/about"><b>About</b></Nav.Link>
								<Nav.Link as={Link} variant="light" to="/contact"><b>Contact</b></Nav.Link>
								<Navbar.Text style={{ color: "rgb(223, 105, 26)", marginLeft: "20px"}}><b>Patch <i>Post Launch Update #1</i></b></Navbar.Text>
								{/* <Form inline style={{marginLeft: "20px"}}><Form.Check id="toggleIsFullScreen" type="checkbox" className="custom-switch" custom="true" label="Go Fullscreen" checked={this.state.isFullScreen} onChange={(e) => this.toggleSetting("isFullScreen")} /></Form> */}
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route exact path="/" render={(props) => <MainPage {...props}
								{...this.state}
							/>}
						/>
						<Route exact path="/about" render={(props) => <AboutPage {...props}
						
							/>}
						/>
						<Route exact path="/contact" render={(props) => <ContactPage {...props}
						
							/>}
						/>
						<Route render={(props) => <MainPage {...props}
								{...this.state}
							/>}
						/>
					</Switch>
				</div>
			</Router>
		);
	}

	/* Settings */

	preventEvent(e) {
		e.preventDefault();
	}



	/* Grid */
	
	onEvidenceClick(e, evidence) {
		e.preventDefault();

		if (e.type === 'click') {
			let selectedEvidence = {...this.state.selectedEvidence};
			selectedEvidence[evidence] = !selectedEvidence[evidence];

			let selectedEvidenceAmount = 0;
			let selectedSecondaryEvidenceAmount = 0;
			for (let e in selectedEvidence) {
				if (selectedEvidence[e] === true) {
					selectedEvidenceAmount++;
					if (this.state.data.secondaryevidence.includes(e)) {
						selectedSecondaryEvidenceAmount++;
					}
				}
			}

			let selectedGhosts = {};
			for (let ghost of this.state.data.ghosts) {
				let ghostFitsAllEvidence = true;
				for (let e in selectedEvidence) {
					if (selectedEvidence[e]) {
						if (!ghost.evidence.includes(e)) {
							ghostFitsAllEvidence = false;
							break;
						}
					}
				}

				if (ghostFitsAllEvidence) {
					selectedGhosts[ghost.name] = true;
				} else {
					selectedGhosts[ghost.name] = false;
				}
			}

			this.setState({
				selectedGhosts: selectedGhosts,
				selectedEvidence: selectedEvidence,
				
				selectedEvidenceAmount: selectedEvidenceAmount,
				selectedSecondaryEvidenceAmount: selectedSecondaryEvidenceAmount
			});
		}
	}

	toggleSetting(key) {
		localStorage.setItem(key, !this.state[key]);
		this.setState({
			[key]: !this.state[key]
		});
	}

}

export default withRouter(App);