import React, {useState} from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);

    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword}`);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return <div className= "Dictionary">
        <form onSubmit={search}>
            <input type="search" autofocus="on" onChange={handleKeywordChange}/>
        </form>
    </div>;
}