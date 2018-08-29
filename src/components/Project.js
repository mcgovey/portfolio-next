import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index'

export class Project extends Component {
  componentWillMount(){
    this.props.fetchProjs();
  }

//   renderDev(dev){
//     return (
//       <div className="dev-card">
//      <h4 className="dev-title">  <a href={dev.html_url} target="_blank"> {dev.login}</a></h4>
//   </div> 
//     )

//   }
	render() {
    console.log('props', this.props);
    return <p>Loading</p>
    // let {devs} = this.props
    // if(devs.isFetching == true){
    //   return <p>Loading</p>
    // }
    // else (devs.isFetching == false && devs.devsArray.length >= 1){
    //   return(
    //     <div>
    //       <div className="dev-list">
    //         {devs.devsArray.map(this.renderDev)}
    //       </div>
    //     </div>
    //   )
    // }
  }
}


export default connect((state) => {return state},actions)(Project)