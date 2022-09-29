import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export default class PhotoRewardsPage extends Component {
    constructor(props) {
        super(props);
        //console.log(JSON.stringify(props))
        var props = {photos: {
          1 : { id: 1, type: "None", rating: 0, money: 0 },
          2 : { id: 2, type: "None", rating: 0, money: 0 },
          3 : { id: 3, type: "None", rating: 0, money: 0 },
          4 : { id: 4, type: "None", rating: 0, money: 0 },
          5 : { id: 5, type: "None", rating: 0, money: 0 },
          6 : { id: 6, type: "None", rating: 0, money: 0 },
          7 : { id: 7, type: "None", rating: 0, money: 0 },
          8 : { id: 8, type: "None", rating: 0, money: 0 },
          9 : { id: 9, type: "None", rating: 0, money: 0 },
          10 : { id: 10, type: "None", rating: 0, money: 0 }
        }, photoinfo: {
         'ghost-photo-taken': false,
         'bone-photo-taken': false,
         'crucifix-photos-taken': 0,
         'deadbody-photos-taken': 0,
         'cursed-possession-photos-taken': 0,
         'ghost-writing-photos-taken': 0
      }, totalmoney: 0, phototypes: {
        'None': { 3 : 0, 2 : 0, 1 : 0, 0 : 0 },
        'Dead Body' : { 3 : 5, 2 : 2, 1 : 1, 0 : 0 },
        'Interaction' : { 3 : 5, 2 : 2, 1 : 1, 0 : 0 },
        'Fingerprint' : { 3 : 5, 2 : 2, 1 : 1, 0 : 0 },
        'Footstep' : { 3 : 5, 2 : 2, 1 : 1, 0 : 0 },
        'Cursed Possession' : { 3 : 5, 2 : 2, 1 : 1, 0 : 0 },
        'Salt Pile' : { 3 : 5, 2 : 2, 1 : 1, 0 : 0 },
        'Dots' : { 3 : 5, 2 : 2, 1 : 1, 0 : 0 },
        'Ghost Writing' : { 3 : 5, 2 : 2, 1 : 1, 0 : 0 },
        'Used Crucifix' : { 3 : 10, 2 : 5, 1 : 2, 0 : 0 },
        'Dirty Water' : { 3 : 10, 2 : 5, 1 : 2, 0 : 0 },
        'Bone' : { 3 : 10, 2 : 5, 1 : 2, 0 : 0 },
        'Ghost' : { 3 : 20, 2 : 10, 1 : 5, 0 : 0 }
      }};
      /*if(props.photoinfo !== undefined){
        props.photoinfo = state.photoinfo;
      }
      if(props.photos !== undefined){
        props.photos = state.photos;
      }
      if(props.totalmoney !== undefined){
        props.totalmoney = state.totalmoney;
      }*/
        //this.state = state;
        //this.handleChange = this.handleChange.bind(this);
        //this.ClearPhotos = this.ClearPhotos.bind(this);
      }
    
    
   
    render() {
        return (
            <div style={{ margin: "25px auto auto", width: "600px"}}>
                    <div className="component-wrapper">
                        <h3>Photo Rewards</h3>
                        <table >
                            <thead>
                                <tr>
                                    <th style={{padding: "5px 15px 5px"}}> Photo # </th>
                                    <th style={{padding: "5px 15px 5px"}}> Photo Type </th>
                                    <th style={{padding: "5px 15px 5px"}}> Star Ranking </th>
                                    <th style={{padding: "5px 15px 5px"}}> Estimated Money </th>
                                </tr>
                            </thead>
                            <tbody>
                            { Object.values(this.props.photos).map((id) => (
                                <tr key={"photo-"+id.id} style={(id.id % 2 === 0) ? {backgroundColor: "#324254"} : {}}>
                                    <td style={{padding: "5px 15px 5px"}}>{id.id}</td>
                                    <td style={{padding: "5px 15px 5px"}}>
                                        <select className="form-control selection-box" name="type-selection" style={{backgroundColor: "#4E5D6C", color: "white"}} value={this.props.photos[id.id].type} onChange={(e) => this.props.handleChange(e, id.id, 'type')}>
                                            {Object.keys(this.props.phototypes).map((id) => <option value={id} key={'type-'+id} disabled={(
                                            (id === "Ghost" && this.props.photoinfo['ghost-photo-taken'] === true) || 
                                            (id === "Bone" && this.props.photoinfo['bone-photo-taken'] === true) || 
                                            (id === "Used Crucifix" && this.props.photoinfo['crucifix-photos-taken'] >= 4) || 
                                            (id === "Dead Body" && this.props.photoinfo['deadbody-photos-taken'] >= 3) || 
                                            (id === "Cursed Possession" && this.props.photoinfo['cursed-possession-photos-taken'] >= 6) || 
                                            (id === "Ghost Writing" && this.props.photoinfo['ghost-writing-photos-taken'] >= 2)) ? 
                                           true : false
                                          }
                                            >{id}</option>)}
                                        </select>
                                    </td>
                                    <td style={{padding: "5px 15px 5px"}}>
                                      <div style={{fontSize: "1.6rem" }}>
                                        <button style={{backgroundColor: "transparent", border: "none", outline: "none"}} className="selection-box" name={'rating-'+id.id+"-1"} onClick={(e) => this.props.handleChange(e, id.id, 'rating', 1)}>
                                          <span style={(1 <= this.props.photos[id.id].rating) ? {color: "gold"} : (0 === this.props.photos[id.id].rating) ? {color: "grey"} : {color: "white"} } className="star">&#9733;</span>
                                        </button>
                                        <button style={{backgroundColor: "transparent", border: "none", outline: "none"}} className="selection-box" name={'rating-'+id.id+"-2"} onClick={(e) => this.props.handleChange(e, id.id, 'rating', 2)}>
                                          <span style={(2 <= this.props.photos[id.id].rating) ? {color: "gold"} : (0 === this.props.photos[id.id].rating) ? {color: "grey"} : {color: "white"} } className="star">&#9733;</span>
                                        </button>
                                        <button style={{backgroundColor: "transparent", border: "none", outline: "none"}} className="selection-box" name={'rating-'+id.id+"-3"} onClick={(e) => this.props.handleChange(e, id.id, 'rating', 3)}>
                                          <span style={(3 <= this.props.photos[id.id].rating) ? {color: "gold"} : (0 === this.props.photos[id.id].rating) ? {color: "grey"} : {color: "white"} } className="star">&#9733;</span>
                                        </button>
                                      </div>
                                    </td>
                                    <td style={{padding: "5px 15px 5px"}}>${id.money}</td>
                                </tr>
                            ))}
                            <tr>
                              <td colSpan={2} style={{padding: "10px 0px 5px"}}><Button variant="danger" onClick={() => this.props.clearPhotos()}>Clear All Photos</Button></td>
                              <td style={{padding: "5px 15px 5px"}}> Total Money:</td>
                              <td style={{padding: "5px 15px 5px", fontWeight: "bold", fontSize: "1rem"}}>${this.props.totalmoney}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
        );
        }
}
