//import useEffect and useState
import { useEffect, useState } from "react"
//import routes, not sure I'll need them here though
import { Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom"

const Index = (props) => {
  
  //sets the state, bookmarks and sets it to null
  const [bookmarks, setBookmarks] = useState(null)

  //url for the api call. Currently set to my cheese app for testing. Will need to be changed
  
  

  //Makes the api call and sets bookmarks to the api data
  const getBookmarks = async () => {
    const response = await fetch(props.url);
    const data = await response.json();
    setBookmarks(data)
  }

  //sets initial state via getBookmarks function
  useEffect(()=>getBookmarks(),[])

  //loop to determine if bookmarks has been set 
  if (bookmarks) {

    //returns a div to hold all bookmarks
    return <div className="all-bookmarks">
      {/* maps over the state data (bookmarks) and returns the bookmark name and url */}
      {bookmarks.map((bookmark) => {
        return <>
          {/* needs to be changed to title, name is for testing purposes */}
          <div className="bookmark-name">{bookmark.title}</div>
          {/* needs to be changed to url, image is for testing purposes */}
          <div className="bookmark-link"><a href={bookmark.url}>Link</a>
            <Link to={`/${bookmark._id}`}><button>Edit</button></Link>
          </div>
        
        </>
              
      })}
    </div>
  }



    //If there are no bookmarks set, will pop up an h1 & h2 that prompts users to create one by redirecting them to the new page. We can edit this to say whatever
  return <>
    
    <h1>Looks like you don't have any bookmarks!</h1>
    <Link to ="/new"><h2>Click here to create some!</h2></Link>
    </>
  
}

export default Index