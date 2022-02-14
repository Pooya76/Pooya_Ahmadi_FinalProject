import { AppContext } from "../../Context";
import { useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import path from "../../router/paths";


function Details(){
    let navigate = useNavigate(); 
    const {
        movie,
        editMode,
        cancelEdit,
        updateMovie,
        deleteMovie,
      } = useContext(AppContext);
      const [newData, setNewData] = useState({});

      const enableEdit = (id, title, year, description, poster) => {
        setNewData({ id, title, year, description, poster });
        editMode(id);
      };
    
      const deleteConfirm = (id) => {
        if (window.confirm("Are you sure?")) {
          deleteMovie(id);
          navigate(path.home);
        }
      };

      const updateNewData = (e, field) => {
        setNewData({
          ...newData,
          [field]: e.target.value,
        });
      };

      const saveBtn = () => {
        updateMovie(newData);
      };

      if(movie.isEditing){
        return(
          <div className= "movie_container">
            <img src = {movie.poster} id="poster"></img>
            <input id="title_input" type="text" defaultValue={movie.title} onChange={(e) => updateNewData(e, "title")}/>         
            <input id="year_input" type="date" defaultValue={movie.year} onChange={(e) => updateNewData(e, "year")}/>        
            <input id="description_input" type="text" defaultValue={movie.description} onChange={(e) => updateNewData(e, "description")}/>      
            <input type="text" defaultValue={movie.poster} onChange={(e) => updateNewData(e, "poster")}/>
            <br/>
            <button className="buttons" onClick={() => saveBtn()}> Save</button>
            <button className="buttons" onClick={() => cancelEdit(movie.id)}>Cancel</button>
        </div>
        )
      }else{
        return(
          <div className= "movie_container">
            <img src = {movie.poster} id="poster"></img>
            <h4 id="title">{movie.title}</h4>
            <h6 id="year">{movie.year}</h6>
            <h5 id="description">{movie.description}</h5>  
            <button className="buttons" onClick={() => enableEdit(movie.id, movie.title, movie.year, movie.description, movie.poster)}>Edit</button>
            <button className="buttons" onClick={() => deleteConfirm(movie.id)}> Delete </button>   
          </div>
        )
      }  
}

export default Details;

