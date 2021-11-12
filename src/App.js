import './App.css';
import Header from './components/Header';
import Index from './pages/Index';
import New from './pages/New';
import { Route, Routes } from 'react-router-dom'
import Edit from './pages/Edit';
import {useState} from 'react'

function App() {
  const url = "https://bookmarkd-project.herokuapp.com/bookmarks/";
  //sets the state, bookmarks and sets it to null
  const [bookmarks, setBookmarks] = useState(null);


  const [selectedBookmark, setSelectedBookmark] = useState(null)
  

 

  //Makes the api call and sets bookmarks to the api data
  const getBookmarks = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBookmarks(data);
  };

  const findBookmark = (bookmark) => {
    setSelectedBookmark(bookmark)
  }


  

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Index url={url} bookmarks={bookmarks} setBookmarks={setBookmarks} getBookmarks={getBookmarks} findBookmark={findBookmark}/>} />
        <Route path="/new" element={<New url={url} />} />
        <Route path="/:id" element={<Edit selectedBookmark={selectedBookmark}  />} />
      </Routes>
    </div>
  );
}

export default App;
