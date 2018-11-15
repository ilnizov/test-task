import React, { Component } from 'react';

import './transactions.css';

export default class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            value: 0
        };

        this.socket = new WebSocket('wss://ws.blockchain.info/inv');
        this.socket.onopen = () => {
            this.socket.send(JSON.stringify({
                'op': 'unconfirmed_sub',
            }))
        };
        this.socket.onmessage = data => {
            const info = JSON.parse(data.data).x.out;

            info.forEach(item => {
                this.setState({
                    count: this.state.count + 1,
                    value: this.state.value / 1000000 + item.value,
                })
            })
        }
    }

    static correctInput(value) {
        return Math.round(value) >= 1000 ?
            Math.floor(Math.round(value) / 1000) + 'k' :
            Math.round(value);
    }

    render() {
        return (
            <section className="transaction-container">
                <header>
                    <h5>New BTC transactions</h5>
                </header>
                <div className="transaction">
                    <span>{ Transaction.correctInput(this.state.value) }</span>
                    <span># { this.state.count }</span>
                </div>
            </section>
        )
    }
}
