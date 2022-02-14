import React, { useState } from 'react'
import { connect } from 'react-redux';

//npm install redux react-redux redux-devtools-extension
function Bat(props) {
    // const [bat,setBat] = useState(0);  //local state to the component.

  return (
    <div>
        <h1>Bats : {props.bats}</h1>
        <button onClick={props.buyBat}>BUY BAT</button>
        {/* <button onClick={()=> setBat(bat - 1)}>BUY BAT</button> */}
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
        bats : state.bat.bats
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        buyBat : ()=>dispatch({type : "BUY_BAT"})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Bat);