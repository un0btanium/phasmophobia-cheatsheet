import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class PhotoRewardsPage extends Component {

	render() {
		return (
			<div style={{ margin: "25px auto auto", width: "600px" }}>
				<div className="component-wrapper">
					<h3>Photo Rewards</h3>
					<table >
						<thead>
							<tr>
								<th style={{ padding: "5px 15px 5px" }}> Photo # </th>
								<th style={{ padding: "5px 15px 5px" }}> Photo Type </th>
								<th style={{ padding: "5px 15px 5px" }}> Star Ranking </th>
								<th style={{ padding: "5px 15px 5px" }}> Estimated Money </th>
							</tr>
						</thead>
						<tbody>
							{Object.values(this.props.photos).map((photo) => (
								<tr key={"photo-" + photo.id} style={(photo.id % 2 === 0) ? { backgroundColor: "#324254" } : {}}>
									<td style={{ padding: "5px 15px 5px" }}>{photo.id}</td>
									<td style={{ padding: "5px 15px 5px" }}>
										<select className="form-control selection-box" name="type-selection" style={{ backgroundColor: "#4E5D6C", color: "white", cursor: "pointer" }} value={this.props.photos[photo.id].type} onChange={(e) => this.props.onPhotoGhostTypeChange(photo.id, e.target.value)}>
											{
												Object.keys(this.props.photoTypeMoneyReward).map((ghostType) => {
													let maxAmountReached = this.props.photoTypeMaxAmount[ghostType] !== -1 && this.props.photoTypeAmount[ghostType] >= this.props.photoTypeMaxAmount[ghostType];
													return <option
														value={ghostType}
														key={'type-' + ghostType}
														disabled={maxAmountReached}
													>
														{ghostType} {maxAmountReached ? "(Max)" : ""}
													</option>
												})
											}
										</select>
									</td>
									<td style={{ padding: "5px 15px 5px" }}>
										<div style={{ fontSize: "1.6rem" }}>
											<button style={{ backgroundColor: "transparent", border: "none", outline: "none" }} className="selection-box" name={'rating-' + photo.id + "-1"} onClick={(e) => this.props.onPhotoRatingChange(photo.id, 1)}>
												<span style={(this.props.photos[photo.id].rating >= 1) ? { color: "gold" } : (0 === this.props.photos[photo.id].rating) ? { color: "grey" } : { color: "white" }} className="star">&#9733;</span>
											</button>
											<button style={{ backgroundColor: "transparent", border: "none", outline: "none" }} className="selection-box" name={'rating-' + photo.id + "-2"} onClick={(e) => this.props.onPhotoRatingChange(photo.id, 2)}>
												<span style={(this.props.photos[photo.id].rating >= 2) ? { color: "gold" } : (0 === this.props.photos[photo.id].rating) ? { color: "grey" } : { color: "white" }} className="star">&#9733;</span>
											</button>
											<button style={{ backgroundColor: "transparent", border: "none", outline: "none" }} className="selection-box" name={'rating-' + photo.id + "-3"} onClick={(e) => this.props.onPhotoRatingChange(photo.id, 3)}>
												<span style={(this.props.photos[photo.id].rating >= 3) ? { color: "gold" } : (0 === this.props.photos[photo.id].rating) ? { color: "grey" } : { color: "white" }} className="star">&#9733;</span>
											</button>
										</div>
									</td>
									<td style={{ padding: "5px 15px 5px" }}>${photo.money}</td>
								</tr>
							))}
							<tr>
								<td colSpan={2} style={{ padding: "10px 0px 5px" }}><Button variant="danger" onClick={() => this.props.resetPhotos()}>Clear All Photos</Button></td>
								<td style={{ padding: "5px 15px 5px" }}> Total Money:</td>
								<td style={{ padding: "5px 15px 5px", fontWeight: "bold", fontSize: "1rem" }}>${this.props.totalMoney}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
