import React from 'react';
import Display from '../Display/Display.js';

class Dashboard extends React.Component {
    state = {
        strikes: 0,
        balls: 0
    }
    render() {
        return (
            <div>
                <button onClick={this.strike}>Strike</button>
                <button onClick={this.ball}>Ball</button>
                <button onClick={this.foul}>Foul</button>
                <button onClick={this.hit}>Hit</button>
                <Display strikes={this.state.strikes} balls={this.state.balls} />
            </div>
        )
    }

    strike = () => {
        if(this.state.strikes === 2) {
            this.setState({ strikes: 0, balls: 0 })
        } else {
            let newTotal = this.state.strikes + 1;
            this.setState({ strikes: newTotal })
        }
    }
    ball = () => {
        if(this.state.balls === 3) {
            this.setState({ strikes: 0, balls: 0 })
        } else {
            let newTotal = this.state.balls + 1;
            this.setState({ balls: newTotal })
        }
    }
    foul = () => {
        if(this.state.strikes >= 2) {
            return;
        } else {
            let newTotal = this.state.strikes + 1;
            this.setState({ strikes: newTotal })
        }
    }
    hit = () => {
        this.setState({ strikes: 0, balls: 0 })
    }
}


export default Dashboard;