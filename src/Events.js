import {Component} from 'react'

class Events extends Component{
    state={
        username:""
    }
    handleChange=()=>{
        alert()
    }
    render(){
        return(
            <div>
                <input 
                    onChange={this.handleChange}
                    placeholder="Enter username"/>
            </div>
        )
    }
}
export default Events