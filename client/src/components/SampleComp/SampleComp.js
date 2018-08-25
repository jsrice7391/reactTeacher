import React, {Component} from "react";

const style = {
    backgroundColor: "lightBlue",
    borderRadius: "40%",
    paddingTop:"5.5%",
    height:"100px",
    textAlign:"center"
}

const pStyle={
    textAlign:"left"
}

export const SampleComp = (props) => (
    <div style={style}>
        <h3>{props.text}</h3>
    </div>
)




