import {Component} from 'react'

class Events extends Component{
    state={
        username:"" ,password:''
    }
    handleClick=()=>{
        console.log(this.state.username)
        console.log(this.state.password)
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        return(
            <div>
                <input 
                    name="username"
                    onChange={this.handleChange}
                    placeholder="Enter username"/>
                    <input 
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Enter password"/>
                    <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}
export default Events