import React from 'react';
import firebase from './firebase'
import "./App.css"

class App extends React.Component{
  state={
    mobile:"+91"
  }
  change=(e)=>{
    this.setState({
      mobile:e.target.value
    })
  }
  handle=()=>{
    var recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha");
    let number=this.state.mobile;
    firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
      let code=prompt("Enter the otp");
      e.confirm(code).then(function(result){
        alert("Entered otp is true and you are the correct user");
        document.getElementById("recaptcha").innerHTML=""
      }).catch((error)=>{
        alert("You entered wrong otp.so please check for ne otp");
        document.getElementById("recaptcha").innerHTML=""
   })
  })
}

render(){
  return(
      <center>
      <div className="body">
      <p>Hello</p>
      <input type="text" onChange={this.change} value={this.state.mobile}/>
      <div id="recaptcha"></div>
      <button onClick={this.handle}>Submit</button>
      </div></center>
    )
  }
}
export default App;





/*//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import FuncProps from './FuncProps'
//import DemoExample from './DemoExample'
//import Events from './Events'
//import JSX from './JSX'

function App(){
  return(
    <div>

      {<StateExample/>
      <JSX/>
      <Events/>
      <DemoExample prize="1st prize"/>
      <StateExample/>
      <PropsExample name="jyothi" age="20"/>
      <FuncProps carname="rolls royce" year="2000"/>
      <h1>Hello</h1>
      <PropsExample name="hari" age="10"/>
      <p>Good afternoon</p>
      <h1>Heading tag</h1>
      <img src="https://media.istockphoto.com/id/919525342/photo/taj-mahal-in-agra-india-in-the-light-of-the-full-moon.jpg?s=612x612&w=0&k=20&c=y9sk_Gwnur6R_nFzgKAJEdu3_9iJzJiFkEUfp9pxX1c=" alt="Taj mahal"/>
      <ClassComponent/>}
    </div>
  )*/

