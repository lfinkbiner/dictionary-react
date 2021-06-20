import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./result";
import Photos from "./Photos";

export default function Dictionary(){
    let [keyword, setKeyword] = useState(null);
    let [results, setResults] =useState(null);
    let [photos, setPhotos]= useState(null);

    function handleResponse (response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }
    
    function search(event){
        event.preventDefault();

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
        
        let pexelsApiKey = "563492ad6f91700001000001d1d713241c4c48368659a1d471c8d640";
        let pexelsUrl= `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
    </div>;
}