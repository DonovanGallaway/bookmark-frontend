//import all dependencies
import './styles.scss';
import Header from './components/Header';
import Index from './pages/Index';
import New from './pages/New';
import { Route, Routes } from 'react-router-dom'
import Edit from './pages/Edit';
import {useState} from 'react'

function App() {
  //stores the Heroku url as a variable
  const url = "https://bookmarkd-project.herokuapp.com/bookmarks/";
  //sets the state, bookmarks and sets it to null
  const [bookmarks, setBookmarks] = useState(null);

  //creates a state for a selected bookmark that will be passed for the edit function
  const [selectedBookmark, setSelectedBookmark] = useState(null)
  

 

  //Makes the api call and sets bookmarks to the api data
  const getBookmarks = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBookmarks(data);
  };

  //sets the state of the selected bookmark for editing
  const findBookmark = (bookmark) => {
    setSelectedBookmark(bookmark)
  }


  

  return (
    <div className="App">
      {/* Establishes the header that will appear on every page */}
      <Header />
      {/* Starts the routes */}
      <Routes>
        {/* Sets the main page route to the index page, which will show all bookmarks. This pages gets the props url, bookmarks, setBookmarks function, getBookmarks function, and findBookmark function */}
        <Route path="/" element={<Index url={url} bookmarks={bookmarks} setBookmarks={setBookmarks} getBookmarks={getBookmarks} findBookmark={findBookmark} />} />
        {/* Sets the route to the new bookmark page. Receives the api url as props */}
        <Route path="/new" element={<New url={url} />} />
        {/* Sets the edit route. gets the selectedBookmark state as props, the api url as props, and the getBookmarks function as props */}
        <Route path="/:id" element={<Edit selectedBookmark={selectedBookmark} url={url} getBookmarks={ getBookmarks}/>} />
      </Routes>
    </div>
  );
}

export default App;
