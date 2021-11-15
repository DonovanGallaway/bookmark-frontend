import { useNavigate,  } from "react-router-dom";
import {useState} from "react"

const New = (props) => {
  //saves the useNavigate hook as a variable
  const navigate = useNavigate()

  //set state of form
  const [newForm, setNewForm] = useState({
    title: "",
    url: ""
  })
  
  //function to create a bookmark via post request to the url
const createBookmark = async (bookmark) => {
  await fetch(props.url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookmark),
  });
  //navigates users back to the index page
  navigate("/");
};

  //handle change function
  const handleChange = (event) => {
    //copies the state into a new variable
    const newState = { ...newForm }
    //grabs the event target value
    newState[event.target.name] = event.target.value;
    //sets the form of the state 
    setNewForm(newState)
  }


  //handle submit function
  const handleSubmit = (event) => {
    //prevents page from reloading
    event.preventDefault()
    //sets the bookmark with the form data
    createBookmark(newForm)
    //resets the form state
    setNewForm({
      title: "",
      url: ""
    })
  }

  
  //form variable - create the form as a variable and inject later

  const form = (
    <form class ="form" onSubmit={handleSubmit}>
      <input
        className="form-title"
        type="text"
        name="title"
        placeholder="Website Name"
        onChange={handleChange}
      />
      <input
        className="form-title"
        type="text"
        name="url"
        placeholder="Website url"
        value="https://"
        onChange={handleChange}
      />
      <input type="submit" value ="Create Bookmark" className="form-button"/>
    </form>
  )



    //returns the form in a div with a title
  return <div new-bookmark>
    <h1>Create New Bookmark</h1>
    {form}
  </div>
}

export default New