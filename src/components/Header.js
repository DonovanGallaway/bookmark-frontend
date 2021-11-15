import { Link } from 'react-router-dom'

const Header = (props) => {
  //returns a nav with links to all bookmarks and a form to make a new bookmark 
  return <>
    <nav className="nav">
      <div className='links'>
      <Link to="/">
        <div className="nav-content"><h2>All Bookmarks</h2></div>
      </Link>
      <Link to="/new">
        <div className="nav-content"><h2>New Bookmarks</h2></div>
      </Link>
      </div>
      <div className='title'><h1>Bookmark App</h1></div>

   </nav>
    </>
}

export default Header