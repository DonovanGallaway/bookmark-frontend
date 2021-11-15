import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const Edit = (props) => {
  //import navagate and params
  const navigate = useNavigate()

  //set form state, initialize blank
  const [editForm, setEditForm] = useState({})
  
  //runs the getBookmarks function to render form with data from selectedBookmark
  useEffect(() => {setEditForm(props.selectedBookmark)},[])

  
  //function to make a put request to the api to replace the data that matches the id of the bookmark
  const updateBookmark = async (bookmark, id) => {
    await fetch(props.url + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(bookmark)
    })
    //reloads the page so the updated bookmark shows up on the main page 
    props.getBookmarks()
  }
  
  //saves the id of the bookmark form props
  const id = props.selectedBookmark._id

  if (props.selectedBookmark) {
    //handleChange function for form
    const handleChange = (event) => {
      //create a copy of the state
      const newState = { ...editForm };
      //update the newState
      newState[event.target.name] = event.target.value;
      //update the state
      setEditForm(newState);
    };

    const handleSubmit = (event) => {
      //prevents refresh
      event.preventDefault();
      //runs the updateBookmark function
      updateBookmark(editForm, id);
      //navigates users back to the main page
      navigate("/");
    };

    //creates the form JSX as a variable to be injected later
    const form = (
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-title"
          type="text"
          name="title"
          placeholder="Website Name"
          onChange={handleChange}
          value={editForm.title}
        />
        <input
          className="form-url"
          type="text"
          name="url"
          placeholder="Website url"
          onChange={handleChange}
          value={editForm.url}
        />
        <input type="submit" value="Update Bookmark" className="form-button" />
      </form>
    );
    //returns a div with a title and the form data from above, prefilled in 
    return <div>
      <h1>Edit Your {props.selectedBookmark.title} Bookmark</h1>
      {form}
    </div>;
  }
}
  
  

export default Edit