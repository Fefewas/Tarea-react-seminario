import { Link } from "react-router-dom";

import '../stylesheets/navigation.css';

const Navigation = () => {
  return <nav className='navbar navbar-expand-lg bg-body-light'>
    <div className="container-fluid collapse navbar-collapse">
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className="nav-item">
          <Link to='/' className="nav-link" activeClassName='active'>Gallery</Link>
        </li>
        <li className="nav-item">
          <Link to='/userlist' className="nav-link" activeClassName='active'>Task list</Link>
        </li>
        <li className="nav-item">
          <Link to='/counter' className="nav-link" activeClassName='active'>Counter</Link>
        </li>
        <li className="nav-item">
          <Link to='/celsiustofahrenheit' className="nav-link" activeClassName='active'>Celsius to fahrenhait</Link>
        </li>
      </ul>
    </div>
  </nav>;
}

export default Navigation;