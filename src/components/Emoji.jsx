import React from "react";

function Emoji(props) {
    return (
        <img className="emoji" src={props.emoji} alt="emoji_img" />
    );

}

export default Emoji