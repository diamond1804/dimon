import React, { Component } from 'react';

class Timer extends Component{
    state={
        date:new Date()
    };

    callMe(){
        setInterval(() =>{
            this.setState({date:new Date});
        },1000);
    }
    render(){
        return(
        <div className='time'>
            <h1>Время</h1>
            <h2>Cейчас {this.state.date.toLocaleTimeString()}</h2>
            {this.callMe()}
        </div>
        );
    }
}
export default Timer