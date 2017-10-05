import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createHashHistory } from 'history';
import { Chart } from 'react-google-charts';


const customHistory = createHashHistory();

class Browse extends Component {

	componentWillMount() {
		if(!this.props.users.isLoggedIn){
			customHistory.push('/');
		}
	}
    render() {
        return (
            <div className="container">
                <div className="col-md-6 col-md-offset-3 text-center">
                    <div className={'my-pretty-chart-container'}>
                    <Chart
                      chartType="ScatterChart"
                      data={
                      [['User', 'Attendence'], [8, 12], [4, 5.5]]
                      }
                      options={{}}
                      graph_id="ScatterChart"
                      width="100%"
                      height="800px"
                      legend_toggle
                    />
                  </div>
                </div>
            </div>

        )
    }
}

function select(state) {
	return {
		users: state.users
	}
}

export default connect(select)(Browse);