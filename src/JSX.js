import React from "react"

function JSX(){
    /*return(
        <div>
            <h1>Good afternoon</h1>
        </div>
    )*/
    return React.createElement(
        "div",
        {id:"one",className:"classone"},
        React.createElement("h1",null,"Good Afternoon")
    )
}

export default JSX