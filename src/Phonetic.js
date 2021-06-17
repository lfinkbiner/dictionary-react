import React from "react";

export default function Phonetic(props){
    console.log(props.phonetic);
    return <div>
        <a href={props.phonetic.audio}>
            Listen
        </a>
        <br/>
        {props.phonetic.text}
    </div>;
}