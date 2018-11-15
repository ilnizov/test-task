import React, { Component } from 'react';
import Transaction from "../transactions/transactions";

import './main.css'

export default class Main extends Component {
    render() {
        return (
            <div className="blockchain-container">
                <Transaction />
            </div>
        )
    }
}
