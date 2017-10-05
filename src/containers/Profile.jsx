import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createHashHistory } from 'history';
import GoogleChart from '../dynamic/GoogleChart.jsx'
const customHistory = createHashHistory();

class Profile extends Component {
	componentWillMount() {
		//console.log(localStorage.getItem('currentUser'));
		if(!this.props.users.isLoggedIn){
			customHistory.push('/');
		}
	}
    render() {
        return (
            <div> <GoogleChart/> </div>
        )
    }
}
function select(state) {
	return {
		users: state.users
	}
}

export default connect(select)(Profile);