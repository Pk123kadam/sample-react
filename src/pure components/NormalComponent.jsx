import React, { Component } from 'react'

export default class NormalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    onIncrement = () => {
        this.setState({
            count: 0
        })
    }
    render() {
        console.log("normal component")
        return (
            <div>NormalComponent
                {this.state.count}
                <button onClick={this.onIncrement}>increment</button>


            </div>
        )
    }
}
