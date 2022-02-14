import { useState, useContext } from "react";
import { AppContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import path from '../../router/paths'
import './index.css'
const Form = () => {
  let navigate = useNavigate(); 
  const { insertMovie } = useContext(AppContext);
  const [newMovie, setNewMovie] = useState({});

  const saveMovie = (e, field) => {
    setNewMovie({
      ...newMovie,
      [field]: e.target.value,
    });
  };

  const submitMovie = (e) => {
    e.preventDefault();
    insertMovie(newMovie);
    navigate(path.home);
  };

  return (
    <form id="insertForm" onSubmit={submitMovie}>
      <h2>Insert Movie</h2>
      <label for="title_input">Title</label>
      <input type="text" id="title_input" onChange={(e) => saveMovie(e, "title")} placeholder="Enter title" required/>

      <label for="year_input">Year</label>
      <input type="date" id="year_input"  onChange={(e) => saveMovie(e, "year")} placeholder="Enter year" required/>

      <label for="description_input">Description</label>
      <input type="text" id="description_input" onChange={(e) => saveMovie(e, "description")} placeholder="Enter description" required/>

      <label for="poster_url">Poster</label>
      <input type="text" id="poster_url" onChange={(e) => saveMovie(e, "poster")} placeholder="Enter picture url" required/>

      <input type="submit" value="Insert" />
    </form>
  );
};

export default Form;