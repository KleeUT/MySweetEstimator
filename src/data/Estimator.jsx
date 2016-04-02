import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            estimate:"- - -",
            values:[1,2,3,5,8],
            units: ["Hours", "Days", "Weeks", "Months"],
            qualifiers: ["", "Man", "Mad", "Short", "Long", "Unicorn"]
        };    
    }
    GenerateEstimate(){
        var value = this.state.values[Math.floor(Math.random()*this.state.values.length)];
        var unit = this.state.units[Math.floor(Math.random()*this.state.units.length)];
        var qualifier = this.state.qualifiers[Math.floor(Math.random()*this.state.qualifiers.length)];
        var estimate = `${value} ${qualifier} ${unit}`;
        console.log(estimate);
        this.setState({estimate: estimate});
    }
    render(){
        return ( 
            <div className="row">
                <div className="jumbotron">
                <p>Sometimes you have no idea how long something will take. 
                When you find yourself in this position what do you do?</p>
                <p>One thing you can do is to use "My Sweet Estimator".
                It'll give you an estimate.  It's probably not accurate and sometimes It wont make sense but at least you'll never be left high and dry with out an estimate.</p>
                </div>
                <div style={{textAlign:'center'}}>
                <h2>{this.state.estimate}</h2>
                <button className='btn btn-primary' onClick={this.GenerateEstimate.bind(this)}>Generate</button>
                </div>
            </div>
        );
    }
}