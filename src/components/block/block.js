import React, { Component } from 'react';

import './block.css';

export default class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blockIndex: 0,
            prevBlockIndex: 0
        };

        this.socket = new WebSocket('wss://ws.blockchain.info/inv');
        this.socket.onopen = () => {
            this.socket.send(JSON.stringify({
                "op":"blocks_sub",
            }))
        };
        this.socket.onmessage = data => {
            const info = JSON.parse(data.data).x;
            const { blockIndex, prevBlockIndex } = info;

            this.setState({
                blockIndex,
                prevBlockIndex
            })
        }
    }

    render() {
        return (
            <section className="block-container">
                <header>
                    <h5>New BTC Block</h5>
                </header>
                <div className="block">
                    <span>{this.state.blockIndex}</span>
                    <span>{this.state.prevBlockIndex}</span>
                </div>
            </section>
        )
    }
}
