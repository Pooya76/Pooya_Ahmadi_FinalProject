import { AppContext } from "../../Context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/paths";
import "./index.css";
var flag = false;

function DisplayForm(){
    let navigate = useNavigate(); 

    const {
        movies,
        selectedMovie,
        serachResualt,
      } = useContext(AppContext);

      const moiveCliced = (e, moive) => {   
        selectedMovie(moive);
        navigate(path.movieDetail);
      };

      const [style, setStyle] = useState("movie_page");
      const [buttonText, setButtonText] = useState("List view");
      const [newData, setNewData] = useState({});

      const changeDisplayMode = () => {
          if(flag){
            setStyle("movie_page");
            setButtonText("List view");
            flag = false;
          }else{
            setStyle("movie_page2");
            flag = true;
            setButtonText("Grid view");
          }
      };

      const updateNewData = (e) => {
          setNewData(e.target.value);
        };

      const saveBtn = () => {
          serachResualt(newData);
        };
      return(
          <>
            <div>
              <input type="text" onChange={(e) => updateNewData(e)} />
              <button onClick={() => saveBtn()}>Search</button>
            </div>

            <button onClick={changeDisplayMode}> {buttonText}</button>
            <br/>
            <br/>

            <div id = {style}>
                {
                  movies.map((movie) => {
                    return(
                       <div className= "movie_container" onClick={e => moiveCliced(e, movie)} >
                          <img src = {movie.poster} id="poster"></img>
                          <h4 id="title">{movie.title}</h4>
                          <h6 id="year">{movie.year}</h6>
                        </div>
                        )
                    }
                    )
                }
            </div>
        </>
        )
}

export default DisplayForm;