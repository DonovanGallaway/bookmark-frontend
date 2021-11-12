import { useNavigate,  } from "react-router-dom";
import {useState} from "react"

const New = (props) => {

  const navigate = useNavigate()

  //set state of form
  const [newForm, setNewForm] = useState({
    title: "",
    url: ""
  })
  
const createBookmark = async (bookmark) => {
  await fetch(props.url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookmark),
  });
  navigate("/");
};

  //handle change function
  const handleChange = (event) => {
    const newState = { ...newForm }
    newState[event.target.name] = event.target.value;
    setNewForm(newState)
  }


  //handle submit function
  const handleSubmit = (event) => {
    event.preventDefault()
    createBookmark(newForm)

    setNewForm({
      title: "",
      url: ""
    })
  }

  
  //form variable

  const form = (
    <form class ="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Website Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="url"
        placeholder="Website url"
        onChange={handleChange}
      />
      <input type="submit" value ="Create Bookmark"/>
    </form>
  )




  return <div>{form}</div>
}

export default New