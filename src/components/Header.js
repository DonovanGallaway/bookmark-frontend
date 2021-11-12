import { Link } from 'react-router-dom'

const Header = (props) => {
  //returns a nav with links to all bookmarks and a form to make a new bookmark 
  return <>
    <nav className="nav">
      <Link to="/">
        <div className="nav-content">All Bookmarks</div>
      </Link>
      <Link to="/new">
        <div className="nav-content">New Bookmarks</div>
      </Link>
   </nav>
    </>
}

export default Header