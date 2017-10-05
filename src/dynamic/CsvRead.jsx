import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReactFileReader from 'react-file-reader';
var data;
var result = [];

export default class CsvRead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      homeLink: "manish"
    }
    
  }

  handleFiles = files => {
    var self = this;

    var reader = new FileReader();
    reader.onload = function(e) {
    
    var csv = reader.result;
    var lines = csv.split("\n");
    
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].split(",");
      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
      }  
      //return result; //JavaScript object
      result= JSON.stringify(result); //JSON
      self.setState({
            data: result
      });
      console.log(self.state.data);
  }
  
  reader.readAsText(files[0]);
}
  render() {
    
    return (
      <ReactFileReader handleFiles={this.handleFiles.bind(this)} fileTypes={'.csv'}>
        <button className='btn' >Upload</button>
        <div>{ this.state.data }</div>
      </ReactFileReader>
    );
  }
}
