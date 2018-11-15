import React, { Component } from 'react';
import Transaction from "../transactions/transactions";
import Block from "../block/block";

import './main.css'

export default class Main extends Component {
    render() {
        return (
            <div className="blockchain-container">
                <Transaction />
                <Block />
            </div>
        )
    }
}
