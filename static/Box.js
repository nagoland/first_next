import React, { Component } from "react"

class Box extends Component {
    constructor(props){
        super(props)
            this.style = {
                backgroundColor: props.color,
                width: props.width + "px",
                height: props.height + "px"
            }
    }

    render(){
        return(
            <div style={this.style} />
        )
    }
}

export default Box