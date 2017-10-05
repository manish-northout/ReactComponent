import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { createHashHistory } from 'history';
import { Chart } from 'react-google-charts';
import CsvRead  from '../dynamic/CsvRead'

const customHistory = createHashHistory();


class GoogleChart extends Component {
	constructor(props) {
    super(props);
    
    this.state = {
      options: {
        title: 'Users Hours comparison',
        hAxis: { title: 'User'},
        vAxis: { title: 'Hours'},
        legend: 'none',
        axisTitlesPosition: 'out',
        'isStacked': true,
        colors: ['#0598d8', '#f97263'],
      },

      data :[]
    };
  }
  onDone = (data) => {
     console.log('manish');
     this.setState({data : data});
     console.log(this.state.data);
  }
   
  render() {

    return (      
      <div><CsvRead handleFiles={this.onDone.bind(this)}  />
      <Chart
        chartType="ColumnChart"
        data = { this.state.data }
        options={this.state.options}
        graph_id="ColumnChart"
        width="100%"
        height="400px"
        legend_toggle
      />
      </div>
    );
  }
}



function select(state) {
	return {
		users: state.users
	}
}

export default connect(select)(GoogleChart);
