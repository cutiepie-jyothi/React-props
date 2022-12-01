import React from 'react'

class DemoExample extends  React.Component{
    state={
        p:this.props.prize
    }
    render(){
        return(
            <div>
                This is demo component
                <p>{this.state.p}</p>
            </div>
        )
    }
}
export default DemoExample