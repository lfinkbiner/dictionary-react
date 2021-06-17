import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./result";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] =useState(null);

    function handleResponse (response){
        setResults(response.data[0]);
    }
    function search(event){
        event.preventDefault();

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return <div className= "Dictionary">
        <section><form onSubmit={search}>
            <input type="search" autoFocus="on" onChange={handleKeywordChange}/>
        </form>
        </section>
        <Result results={results} />
    </div>;
}