import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="container justify-content-end navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><i className="flaticon-gym"></i></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                        
                            <li className="nav-item hover">
                            {/* <Link className="navbar-brand" to='/'> */}
                                <NavLink exact={true} className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                {/* </Link> */}
                            </li>
                            
                            <li className="nav-item hover">
                            {/* <Link className="navbar-brand" to='/product'> */}
                                <NavLink className="nav-link" to="/product">Product</NavLink>
                            {/* </Link> */}
                            </li>
                            <li className="nav-item hover">
                            {/* <Link className="navbar-brand" to='/contact'> */}
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            {/* </Link> */}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>        
        </>
    )
}

export default Navbar;