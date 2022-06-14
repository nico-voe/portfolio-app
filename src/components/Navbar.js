import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            NICO <i className='fab fa-typo3' />
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar


