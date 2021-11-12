import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const Edit = (props) => {
  //import navagate and params
  const navigate = useNavigate()
  const params = useParams()

  const bookmark=props.selectedBookmark
  //save the id of the bookmark in a variable
  //const id = params.id;

  //set form state, initialize blank
  const [editForm, setEditForm] = useState({})

  //const bookmarks = props.getBookmarks()
  
  //runs the getBookmarks function to render 
  useEffect(() => {setEditForm(props.selectedBookmark)},[])

  const url = props.selectedBookmark.url;

  const updateBookmark = async (bookmark, id) => {
    await fetch(props.url + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(bookmark)
    })
    props.getBookmarks()
  }
  ////////////////////////
  const title = props.selectedBookmark.title
  
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
      event.preventDefault();
      updateBookmark(editForm, id);
      navigate("/");
    };

    const form = (
      <form class="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Website Name"
          onChange={handleChange}
          value={editForm.title}
        />
        <input
          type="text"
          name="url"
          placeholder="Website url"
          onChange={handleChange}
          value={editForm.url}
        />
        <input type="submit" value="Update Bookmark" />
      </form>
    );
    return <div>{form}</div>;
  }









//   if (props.selectedBookmark) {
//     //const bookmark = props.bookmarks.find((b) => b._id === id)
//     setEditForm(bookmark)
    
//     const handleChange = (event) => {
//       const newState = { ...editForm }
      
//       newState[event.target.name] = event.target.value
//       setEditForm(newState)
//     }

//     const handleSubmit = (event) => {
//       event.preventDefault()
//       updateBookmark(editForm, bookmark._id)
//       navigate("/")
//     }


//     const form = (
//       <form class="form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Website Name"
//           onChange={handleChange}
//           value={bookmark.title}
//         />
//         <input
//           type="text"
//           name="url"
//           placeholder="Website url"
//           onChange={handleChange}
//           value={bookmark.url}
//         />
//         <input type="submit" value="Create Bookmark" />
//       </form>
//     );
//     return (<div>{form}</div>)
//   }
  

  
  


   return <div>EDIT</div>
}
  
  

export default Edit