import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LogoutLink } from "./LogoutLink.jsx";

export function Header() {
  return (
    <div className="container=fluid sticky-top">
      <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor: "#ad8f43"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/welcome">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">About</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Profile
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/profile">Profile</a></li>
            <li><a className="dropdown-item" href="/signup">Signup</a></li>
            <li><a className="dropdown-item" href="/login">Login</a></li>
            <li> <LogoutLink className="dropdown-item"/></li>
          </ul>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Donations
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/createdonation">New Donation</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  );
}

// export default Header;