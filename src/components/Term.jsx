import React from "react";
import Dt from "./Dt"
import Dd from "./Dd"

function Term(props) {
    return (
        <div className="term">
            <Dt name={props.name} emoji={props.emoji} />
            <Dd meaning={props.meaning} />
        </div>);

}

export default Term