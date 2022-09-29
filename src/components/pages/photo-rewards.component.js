import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export default class PhotoRewardsPage extends Component {
    constructor() {
        super();
        if(this.state === undefined)
        {
        }
        this.state = { photos: {
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
           }, phototypes: {
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
           }, photoinfo: {
              'ghost-photo-taken': false,
              'bone-photo-taken': false,
              'crucifix-photos-taken': 0,
              'deadbody-photos-taken': 0,
              'cursed-possession-photos-taken': 0,
              'ghost-writing-photos-taken': 0
           }, totalmoney: 0
           };
        this.handleChange = this.handleChange.bind(this);
        this.ClearPhotos = this.ClearPhotos.bind(this);
      }
    handleChange(event, id, type, button){
      if(type === undefined)
      {
        console.error('Type undefined.') //error only
        return;
      }

      //local values
      var photos = this.state.photos;
      var value;

      // if we changed the photo type
      if(type === 'type'){
        value = event.target.value;
        var oldvalue = this.state.photos[id].type;
        var photoinfo = this.state.photoinfo;
        if(oldvalue === value){
          return;
        }
        switch (value){
          case "Ghost":
            if(photoinfo['ghost-photo-taken'] === true){ // Only 1 ghost photo allowed.
              return;
            }
            photoinfo['ghost-photo-taken'] = true;
            break;
          case "Bone":
            if(photoinfo['bone-photo-taken'] === true){ // Only 1 bone photo allowed.
              return;
            }
            photoinfo['bone-photo-taken'] = true;
            break;
          case "Used Crucifix":
            if(photoinfo['crucifix-photos-taken'] >= 4){ // Only 4 possible crucifix photos allowed.
              return;
            }
            photoinfo['crucifix-photos-taken'] += 1;
            break;
          case "Dead Body":
            if (photoinfo['deadbody-photos-taken'] >= 3){ // Only 3 dead body photos possible (if 4 people die, nobody is alive to take the 4th photo)
              return;
            }
            photoinfo['deadbody-photos-taken'] += 1;
            break;
          case "Cursed Possession":
            if(photoinfo['cursed-possession-photos-taken'] >= 6){ // Only 6 cursed possessions to take a photo of.
              return;
            }
            photoinfo['cursed-possession-photos-taken'] += 1;
            break;
          case "Ghost Writing":
            if(photoinfo['ghost-writing-photos-taken'] >= 2){ // Only 2 journals that the ghost could write in
              return;
            }
            photoinfo['ghost-writing-photos-taken'] += 1;
            break;
        }
        switch(oldvalue) { // Ensure that something has actually changed before changing these variables. 
          case "Ghost":
            photoinfo['ghost-photo-taken'] = false;
            break;
          case "Bone":
            photoinfo['bone-photo-taken'] = false;
            break;
          case "Used Crucifix":
            photoinfo['crucifix-photos-taken'] -= 1;
            break;
          case "Dead Body":
            photoinfo['deadbody-photos-taken'] -= 1;
            break;
          case "Cursed Possession":
            photoinfo['cursed-possession-photos-taken'] -= 1;
            break;
          case "Ghost Writing":
            photoinfo['ghost-writing-photos-taken'] -= 1;
            break;
        }
        
        this.setState({photoinfo: photoinfo})

        if(value === "None"){ // if selecting 'none', the rating will be set to 0 (greyed out).
          photos[id].rating = 0;
        } else if(value !== "None")
        {
          photos[id].rating = 3; // if selecting a different photo type, the default rating is set to 3, so it cannot be greyed out.
        }


        photos[id].type = value; // updates the value.
        photos[id].money = this.state.phototypes[value][photos[id].rating];

        
        this.setState({photos: photos});
      } else {
        if(photos[id].type === "None"){
          return;
        }
        value = button;
        photos[id].rating = value;
        photos[id].money = this.state.phototypes[photos[id].type][value];
        this.setState({photos: photos});
      }
      var totalmoney = 0;
      Object.values(this.state.photos).forEach((x) => {
        totalmoney += x.money;
      })
      this.setState({totalmoney: totalmoney})
    }
    ClearPhotos(){
      this.setState({photos: {
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
      }, totalmoney: 0});
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
                            { Object.values(this.state.photos).map((id) => (
                                <tr key={"photo-"+id.id} style={(id.id % 2 === 0) ? {backgroundColor: "#324254"} : {}}>
                                    <td style={{padding: "5px 15px 5px"}}>{id.id}</td>
                                    <td style={{padding: "5px 15px 5px"}}>
                                        <select className="form-control selection-box" name="type-selection" style={{backgroundColor: "#4E5D6C", color: "white"}} value={this.state.photos[id.id].type} onChange={(e) => this.handleChange(e, id.id, 'type')}>
                                            {Object.keys(this.state.phototypes).map((id) => <option value={id} key={'type-'+id} disabled={(
                                            (id === "Ghost" && this.state.photoinfo['ghost-photo-taken'] === true) || 
                                            (id === "Bone" && this.state.photoinfo['bone-photo-taken'] === true) || 
                                            (id === "Used Crucifix" && this.state.photoinfo['crucifix-photos-taken'] >= 4) || 
                                            (id === "Dead Body" && this.state.photoinfo['deadbody-photos-taken'] >= 3) || 
                                            (id === "Cursed Possession" && this.state.photoinfo['cursed-possession-photos-taken'] >= 6) || 
                                            (id === "Ghost Writing" && this.state.photoinfo['ghost-writing-photos-taken'] >= 2)) ? 
                                           true : false
                                          }
                                            >{id}</option>)}
                                        </select>
                                    </td>
                                    <td style={{padding: "5px 15px 5px"}}>
                                      <div style={{fontSize: "1.6rem" }}>
                                        <button style={{backgroundColor: "transparent", border: "none", outline: "none"}} className="selection-box" name={'rating-'+id.id+"-1"} onClick={(e) => this.handleChange(e, id.id, 'rating', 1)}>
                                          <span style={(1 <= this.state.photos[id.id].rating) ? {color: "gold"} : (0 === this.state.photos[id.id].rating) ? {color: "grey"} : {color: "white"} } className="star">&#9733;</span>
                                        </button>
                                        <button style={{backgroundColor: "transparent", border: "none", outline: "none"}} className="selection-box" name={'rating-'+id.id+"-2"} onClick={(e) => this.handleChange(e, id.id, 'rating', 2)}>
                                          <span style={(2 <= this.state.photos[id.id].rating) ? {color: "gold"} : (0 === this.state.photos[id.id].rating) ? {color: "grey"} : {color: "white"} } className="star">&#9733;</span>
                                        </button>
                                        <button style={{backgroundColor: "transparent", border: "none", outline: "none"}} className="selection-box" name={'rating-'+id.id+"-3"} onClick={(e) => this.handleChange(e, id.id, 'rating', 3)}>
                                          <span style={(3 <= this.state.photos[id.id].rating) ? {color: "gold"} : (0 === this.state.photos[id.id].rating) ? {color: "grey"} : {color: "white"} } className="star">&#9733;</span>
                                        </button>
                                      </div>
                                    </td>
                                    <td style={{padding: "5px 15px 5px"}}>${id.money}</td>
                                </tr>
                            ))}
                            <tr>
                              <td colSpan={2} style={{padding: "10px 0px 5px"}}><Button variant="danger" onClick={() => this.ClearPhotos()}>Clear All Photos</Button></td>
                              <td style={{padding: "5px 15px 5px"}}> Total Money:</td>
                              <td style={{padding: "5px 15px 5px", fontWeight: "bold", fontSize: "1rem"}}>${this.state.totalmoney}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
        );
        }
}
