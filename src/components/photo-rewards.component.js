import React, {Component} from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default class PhotoRewardsPage extends Component {

    constructor() {
        super();
        this.state = { photos: {
             1 : { id: 1, type: "None", rating: 3, money: 0 },
             2 : { id: 2, type: "None", rating: 3, money: 0 },
             3 : { id: 3, type: "None", rating: 3, money: 0 },
             4 : { id: 4, type: "None", rating: 3, money: 0 },
             5 : { id: 5, type: "None", rating: 3, money: 0 },
             6 : { id: 6, type: "None", rating: 3, money: 0 },
             7 : { id: 7, type: "None", rating: 3, money: 0 },
             8 : { id: 8, type: "None", rating: 3, money: 0 },
             9 : { id: 9, type: "None", rating: 3, money: 0 },
             10 : { id: 10, type: "None", rating: 3, money: 0 }
           }, phototypes: {
             'None': { 3 : 0, 2 : 0, 1 : 0 },
             'Dead Body' : { 3 : 5, 2 : 2, 1 : 1 },
             'Interaction' : { 3 : 5, 2 : 2, 1 : 1 },
             'Fingerprint' : { 3 : 5, 2 : 2, 1 : 1 },
             'Footstep' : { 3 : 5, 2 : 2, 1 : 1 },
             'Cursed Possession' : { 3 : 5, 2 : 2, 1 : 1 },
             'Salt Pile' : { 3 : 5, 2 : 2, 1 : 1 },
             'Dots' : { 3 : 5, 2 : 2, 1 : 1 },
             'Ghost Writing' : { 3 : 5, 2 : 2, 1 : 1 },
             'Used Crucifix' : { 3 : 10, 2 : 5, 1 : 2 },
             'Dirty Water' : { 3 : 10, 2 : 5, 1 : 2 },
             'Bone' : { 3 : 10, 2 : 5, 1 : 2 },
             'Ghost' : { 3 : 20, 2 : 10, 1 : 5 }
           }, fields: {
             'type-1': 'None',
             'type-2': 'None',
             'type-3': 'None',
             'type-4': 'None',
             'type-5': 'None',
             'type-6': 'None',
             'type-7': 'None',
             'type-8': 'None',
             'type-9': 'None',
             'type-10': 'None',
             'rating-1': 3,
             'rating-2': 3,
             'rating-3': 3,
             'rating-4': 3,
             'rating-5': 3,
             'rating-6': 3,
             'rating-7': 3,
             'rating-8': 3,
             'rating-9': 3,
             'rating-10': 3
           }};
        this.handleChange = this.handleChange.bind(this);
      }
    handleChange(event){
      //set value
      //is rating or is type
      var value = event.target.value;
      var id = event.target.name;
      var idNum = id.replace('type-', '');
      //local copy of photos which will replace the state value later

      if(id.startsWith('type-')){
           var photos = this.state.photos;
        //update money
                console.log('idnum: ' + idNum, ' value: ' + value + ' money: ' + this.state.phototypes[value][photos[idNum].rating])

           photos[idNum].money = this.state.phototypes[value][photos[idNum].rating];
           this.setState({photos: photos});
        //var fields = this.state.fields;
        //fields[id] = value;
        //   this.setState({fields: event.target.value})


      } else {

      }

      //console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <div style={{ margin: "25px auto auto", width: "600px"}}>
                    <div className="component-wrapper">
                        <h3>Photo Rewards</h3>
                        <table>
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
                                <tr>
                                    <td style={{padding: "5px 15px 5px"}}>{id.id}</td>
                                    <td style={{padding: "5px 15px 5px"}}>
                                        <select className="form-control" value={this.state.fields[id.id]} onChange={this.handleChange} name={'type-'+id.id}>
                                            {Object.keys(this.state.phototypes).map((id) => <option value={id}>{id}</option>)}
                                        </select>
                                    </td>
                                    <td style={{padding: "5px 15px 5px"}}>{id.rating}</td>
                                    <td style={{padding: "5px 15px 5px"}}>{id.money}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    </div>
        );
        }
}