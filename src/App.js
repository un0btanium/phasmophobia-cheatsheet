import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "./theme/bootstrap.css";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import MainPage from './components/pages/main-page.component';
import VoiceLinesPage from './components/pages/voice-lines-page.component';
import AboutPage from './components/pages/about-page.component';
import ContactPage from './components/pages/contact-page.component';
import PhotoRewardsPage from './components/pages/photo-rewards.component';

import data from './phasmophobia-data/data.js';

import logo from "./images/ghost.svg";

const BG = "dark"; // primary, dark, light
const VARIANT = "dark"; // dark, light

const WEBSITE_URL = "un0btanium.github.io/phasmophobia-cheatsheet/";

const PATCH_VERSION = data.patchVersion;

class App extends Component {


	constructor(props) {
		super(props);

		data.primaryevidence = [];
		data.secondaryevidence = [];

		let ghostNames = [];
		let ghostsByName = {};
		let selectedGhosts = {};
		let ignoredGhosts = {};
		let ghostHasEvidence = {};
		let selectedEvidence = {};
		let ignoredEvidence = {};
		let remainingEvidence = {};
		
		let photoTypeAmount = {}

		// TODO add tooltip info for each ghost (copy ingame texts)

		for (let ghost of data.ghosts) {
			ghost.evidence = ghost.primaryEvidences.concat(ghost.secondaryEvidences);
			for (let primaryEvidence of ghost.primaryEvidences) {
				if (!data.primaryevidence.includes(primaryEvidence)) {
					data.primaryevidence.push(primaryEvidence);
				}
			}
			for (let secondaryEvidence of ghost.secondaryEvidences) {
				if (!data.secondaryevidence.includes(secondaryEvidence)) {
					data.secondaryevidence.push(secondaryEvidence);
				}
			}

			selectedGhosts[ghost.name] = false;
			ignoredGhosts[ghost.name] = false;
			ghostsByName[ghost.name] = ghost;
			ghostNames.push(ghost.name);
		}


		let sortAlphabetically = (a, b) => {
			if (a < b) { return -1; }
			if (a > b) { return 1; }
			return 0;
		}
		data.primaryevidence.sort(sortAlphabetically);
		ghostNames.sort(sortAlphabetically);
		for (let voicelineName in data.voicelines) {
			data.voicelines[voicelineName].sort(sortAlphabetically);
		}

		for (let evidence of data.primaryevidence) {
			selectedEvidence[evidence] = false;
			ignoredEvidence[evidence] = false;
			remainingEvidence[evidence] = true;
		}

		for (let evidence of data.secondaryevidence) {
			selectedEvidence[evidence] = false;
			ignoredEvidence[evidence] = false;
			remainingEvidence[evidence] = true;
		}


		for (let ghostName of ghostNames) {
			ghostHasEvidence[ghostName] = {};
			for (let evidence of ghostsByName[ghostName].evidence) {
				ghostHasEvidence[ghostName][evidence] = true;
			}
		}
		
		
		let photos = {
			1: {
				id: 1,
				type: "None",
				rating: 0,
				money: 0
			}
		};

		for (let photoType in data.photoTypeMoneyReward) {
			photoTypeAmount[photoType] = 0;
		}
		

		this.onEvidenceClick = this.onEvidenceClick.bind(this);
		this.resetEvidence = this.resetEvidence.bind(this);
		this.setSetting = this.setSetting.bind(this);

		this.onPhotoGhostTypeChange = this.onPhotoGhostTypeChange.bind(this);
		this.onPhotoRatingChange = this.onPhotoRatingChange.bind(this);
		this.resetPhotos = this.resetPhotos.bind(this);


		this.state = {
			showAllSecondaryEvidenceThreshold: parseInt(this.loadSetting("showAllSecondaryEvidenceThreshold", "1")),

			data: data,

			ghostNames: ghostNames,
			ghostsByName: ghostsByName,

			selectedGhosts: selectedGhosts,
			ignoredGhosts: ignoredGhosts,
			selectedEvidence: selectedEvidence,
			ignoredEvidence: ignoredEvidence,
			remainingEvidence: remainingEvidence,

			selectedGhostAmount: 0,
			selectedEvidenceAmount: 0,
			selectedSecondaryEvidenceAmount: 0,

			ghostHasEvidence: ghostHasEvidence,


			photos: photos,
			totalMoney: 0,
			photoTypeAmount: photoTypeAmount,
			photoTypeMoneyReward: data.photoTypeMoneyReward,
			photoTypeMaxAmount: data.photoTypeMaxAmount,


			onEvidenceClick: this.onEvidenceClick,
			setSetting: this.setSetting,
			resetEvidence: this.resetEvidence,
			
			onPhotoGhostTypeChange: this.onPhotoGhostTypeChange,
			onPhotoRatingChange: this.onPhotoRatingChange,
			resetPhotos: this.resetPhotos
		};
	}

	render() {
		return (
			<Router>
				<div className="full-screenable-node">
					<Navbar bg={BG} variant={VARIANT} expand="xl" style={{ boxShadow: '0px 2px 5px #000000' }}>
						<Navbar.Brand style={{ marginLeft: "15%" }}>
							<a href={"http://" + WEBSITE_URL}>
								<img src={logo} width="35" height="35" alt="Logo" />
								<b>{' Phasmophobia CheatSheet'}</b>
							</a>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav" style={{ marginRight: "10%" }}>
							<Nav className="mr-auto">
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/ghostsandevidence"><b>Ghosts & Evidence</b></Nav.Link>
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/voicelines"><b>Voicelines</b></Nav.Link>
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/photorewards"><b>Photo Rewards</b></Nav.Link>
							</Nav>

							<Nav>
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/about"><b>About</b></Nav.Link>
								<Nav.Link as={Link} variant="light" to="/phasmophobia-cheatsheet/contact"><b>Contact</b></Nav.Link>
								<Navbar.Text style={{ color: "rgb(223, 105, 26)", marginLeft: "20px" }}><b>Patch <i>{PATCH_VERSION}</i></b></Navbar.Text>
							</Nav>
						</Navbar.Collapse>
					</Navbar>

					<Switch>
						<Route exact path="/phasmophobia-cheatsheet/ghostsandevidence" render=
							{(props) => <MainPage {...props}
								{...this.state}
							/>}
						/>
						<Route exact path="/phasmophobia-cheatsheet/voicelines" render=
							{(props) => <VoiceLinesPage {...props}
								{...this.state}
							/>}
						/>
						<Route exact path="/phasmophobia-cheatsheet/photorewards" render=
							{(props) => <PhotoRewardsPage {...props}
								{...this.state}
							/>}
						/>
						<Route exact path="/phasmophobia-cheatsheet/about" render=
							{(props) => <AboutPage {...props}

							/>}
						/>
						<Route exact path="/phasmophobia-cheatsheet/contact" render=
							{(props) => <ContactPage {...props}

							/>}
						/>
						<Route render=
							{(props) => <MainPage {...props}
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

	setSetting(key, value) {
		localStorage.setItem(key, value);
		this.setState({
			[key]: value
		});
	}

	loadSetting(key, defaultValue) {
		return localStorage.getItem(key) || defaultValue;
	}



	/* Grid */

	onEvidenceClick(e, evidence) {
		e.preventDefault();

		let selectedEvidence = { ...this.state.selectedEvidence };
		let ignoredEvidence = { ...this.state.ignoredEvidence };

		if (e.type === 'click') {
			selectedEvidence[evidence] = !selectedEvidence[evidence];
			if (selectedEvidence[evidence]) {
				ignoredEvidence[evidence] = false;
			}
		} else if (e.type === 'contextmenu') {
			ignoredEvidence[evidence] = !ignoredEvidence[evidence];
			if (ignoredEvidence[evidence]) {
				selectedEvidence[evidence] = false;
			}
		}


		let selectedEvidenceAmount = 0;
		let selectedSecondaryEvidenceAmount = 0;
		for (let e in selectedEvidence) {
			if (selectedEvidence[e] === true || ignoredEvidence[e] === true) {
				selectedEvidenceAmount++;
				if (this.state.data.secondaryevidence.includes(e)) {
					selectedSecondaryEvidenceAmount++;
				}
			}
		}

		let selectedGhosts = {};
		let ignoredGhosts = {};
		let selectedGhostAmount = 0;
		let remainingEvidence = {};
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

			for (let e in ignoredEvidence) {
				if (ignoredEvidence[e]) {
					if (ghost.evidence.includes(e)) {
						ignoredGhosts[ghost.name] = true;
						ghostFitsAllEvidence = false;
						break;
					}
				}
			}

			if (ghostFitsAllEvidence) {
				selectedGhosts[ghost.name] = true;
				selectedGhostAmount++;
				for (let e of ghost.evidence) {
					remainingEvidence[e] = true;
				}
			} else {
				selectedGhosts[ghost.name] = false;
			}
		}

		this.setState({
			selectedGhosts: selectedGhosts,
			ignoredGhosts: ignoredGhosts,
			selectedEvidence: selectedEvidence,
			ignoredEvidence: ignoredEvidence,
			remainingEvidence: remainingEvidence,

			selectedGhostAmount: selectedGhostAmount,
			selectedEvidenceAmount: selectedEvidenceAmount,
			selectedSecondaryEvidenceAmount: selectedSecondaryEvidenceAmount
		});
	}

	resetEvidence() {
		let selectedGhosts = {};
		let ignoredGhosts = {};
		let selectedEvidence = { ...this.state.selectedEvidence };
		let ignoredEvidence = { ...this.state.ignoredEvidence };
		let remainingEvidence = {};

		for (let ghost of data.ghosts) {
			selectedGhosts[ghost.name] = false;
			ignoredGhosts[ghost.name] = false;
		}

		for (let evidence of data.primaryevidence) {
			selectedEvidence[evidence] = false;
			ignoredEvidence[evidence] = false;
			remainingEvidence[evidence] = true;
		}

		for (let evidence of data.secondaryevidence) {
			selectedEvidence[evidence] = false;
			ignoredEvidence[evidence] = false;
			remainingEvidence[evidence] = true;
		}


		this.setState({
			selectedGhosts: selectedGhosts,
			ignoredGhosts: ignoredGhosts,
			selectedEvidence: selectedEvidence,
			ignoredEvidence: ignoredEvidence,
			remainingEvidence: remainingEvidence,

			selectedGhostAmount: 0,
			selectedEvidenceAmount: 0,
			selectedSecondaryEvidenceAmount: 0
		});
	}

	onPhotoGhostTypeChange(photoId, newGhostType) {
		var photos = { ...this.state.photos};
		var photoTypeAmount = { ...this.state.photoTypeAmount};

		var oldGhostType = photos[photoId].type;
		if (oldGhostType === newGhostType) {
			return;
		}

		let maxAmount = this.state.photoTypeMaxAmount[newGhostType];
		if (maxAmount !== -1 && photoTypeAmount[newGhostType] >= maxAmount) { // ghost type has a limit &  limit already hit
			return;
		}
		photoTypeAmount[newGhostType] += 1;
		photoTypeAmount[oldGhostType] -= 1;

		photos[photoId].type = newGhostType;
		photos[photoId].rating = (newGhostType === "None") ? 0 : 3;
		photos[photoId].money = this.state.photoTypeMoneyReward[newGhostType][photos[photoId].rating];

		var totalMoney = 0;
		Object.values(photos).forEach((photo) => {
			totalMoney += photo.money;
		});

		let photosAmount = Object.keys(photos).length
		if (photoId === photosAmount) {
			photos[photosAmount+1] = {
				id: photosAmount+1,
				type: "None",
				rating: 0,
				money: 0
			};
		}

		this.setState({
			photos: photos,
			photoTypeAmount: photoTypeAmount,
			totalMoney: totalMoney
		});
	}

	onPhotoRatingChange(photoId, newRating) {
		if (this.state.photos[photoId].type === "None") {
			return;
		}

		let photos = { ...this.state.photos};

		photos[photoId].rating = newRating;
		photos[photoId].money = this.state.photoTypeMoneyReward[photos[photoId].type][newRating];
		
		var totalMoney = 0;
		Object.values(photos).forEach((photo) => {
			totalMoney += photo.money;
		});

		this.setState({
			photos: photos,
			totalMoney: totalMoney
		});
	}


	resetPhotos() {
		let photoTypeAmount = {};
		for (let photoType in data.photoTypeMoneyReward) {
			photoTypeAmount[photoType] = 0;
		}

		let photos = {
			1: {
				id: 1,
				type: "None",
				rating: 0,
				money: 0
			}
		};

		this.setState(
			{
				photos: photos,
				photoTypeAmount: photoTypeAmount,
				totalMoney: 0
			}
		);
	}

}

export default withRouter(App);
