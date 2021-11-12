import { useNavigate,  } from "react-router-dom";
import {useState} from "react"

const New = (props) => {

  const navigate = useNavigate()

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
      body: JSON.stringify(bookmark)
    });
    navigate("/")
  }




  return <div>NEW</div>
}

export default New