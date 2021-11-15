//import useEffect and useState
import { useEffect, useState } from "react"
//import routes, not sure I'll need them here though
import { Route, Routes, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Index = (props) => {
  

  //saves all bookmarks as a variable from props
  const bookmarks = props.bookmarks

  //saves the function to get the bookmarks as a varialbe
  const getBookmarks=props.getBookmarks

  
  //sets initial state via getBookmarks function
  useEffect(()=>getBookmarks(),[])

  //loop to determine if bookmarks has been set 
  if (props.bookmarks) {
    //returns a div to hold all bookmarks
    return (
      <div className="all-bookmarks">
        <h1 className='page-title'>All Bookmarks</h1>

        {/* maps over the state data (bookmarks) and returns the bookmark name and url */}
        {bookmarks.map((bookmark) => {
          return (
            <div className="bookmark">
              {/* sets the bookmark title */}
              <div className="bookmark-name">
                <h2>{bookmark.title}</h2>
              </div>
              <div className='bookmark-funcs'>
              {/* sets the bookmark link */}
              <div className="bookmark-link">
                <a href={bookmark.url}>
                  <img src="/link.png" alt="link" />
                </a>
                {/* links to the bookmark edit page */}
                <Link to={`/${bookmark._id}`}>
                  {/* Image to represent the edit page link */}
                  <img
                    src="/edit.png"
                    alt="edit"
                    // Function to pass the edit apge the correct bookmark data
                    onClick={() => props.findBookmark(bookmark)}
                  />
                </Link>
                {/* Creates a delete button */}
                <img
                  className="delete-button"
                  src="/delete.png"
                  alt="delete"
                  onClick={
                    // Function on the delete button that deletes the link
                    async () => {
                      await fetch(props.url + bookmark._id, {
                        method: "delete",
                      });
                      getBookmarks();
                    }
                  }
                />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }



    //If there are no bookmarks set, will pop up an h1 & h2 that prompts users to create one by redirecting them to the new page. 
  return <>
    
    <h1>Looks like you don't have any bookmarks!</h1>
    <Link to ="/new"><h2>Click here to create some!</h2></Link>
    </>
  
}

export default Index