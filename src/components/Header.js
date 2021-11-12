import { Link } from 'react-router-dom'

const Header = (props) => {
  return <>
    <nav className="nav">
      <Link to="/">
        <div className="nav-content">All Bookmarks</div>
      </Link>
      <Link to="/bookmarks/new">
        <div className="nav-content">New Bookmarks</div>
      </Link>
   </nav>
    </>
}

export default Header