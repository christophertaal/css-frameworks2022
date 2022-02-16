import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav id="navbar-main"  className="navbar navbar-expand-lg navbar-light bg-light sticky">
                <a className="navbar-brand ps-2" href="#">The YAY Company</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/news" className="nav-link">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>
                    <form id="search-form" className="form-inline my-2 my-lg-0 pe-3">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn search-btn my-2 my-sm-0" type="submit">Go</button>
                    </form>
                </div>
                </nav>
        </div>
    );
}

export default Navbar;