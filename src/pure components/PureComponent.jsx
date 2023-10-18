// import React, { Component, PureComponent } from 'react'

// export default class Purecomponent extends PureComponent {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//     }
//     onIncrement = () => {
//         this.setState({
//             count: 0
//         })
//     }
//     render() {
//         console.log("pure component")
//         return (
//             <div>pure component
//                 {this.state.count}
//                 <button onClick={this.onIncrement}>increment</button>


//             </div>
//         )
//     }
// }
import React, { useState } from 'react'

function Purecomponent() {
    const [state, setState] = useState(0)
    console.log("pure component")
    return (
        <div>PureComponent
            {state}
            <button onClick={() => setState(0)}>increment</button>



        </div>
    )
}

export default Purecomponent
