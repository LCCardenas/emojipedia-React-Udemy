import React from "react";
import Emoji from "./Emoji"

function Dt(props) {
    return (
        <dt className="dt">
            <span className="emoji" role="img" aria-label={props.emoji}>
                {props.emoji}
            </span>
            <span> {props.name} </span>
        </dt>);

}

export default Dt