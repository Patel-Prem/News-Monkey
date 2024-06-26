import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div className='fixed-top'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id='navbar'>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="categoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="categoryDropdown" style={{height: 'calc( 5 * 100% )', overflow:'auto'}}>
                                        {/* <li><Link className="dropdown-item" value="general" to="/">General</Link></li> */}
                                        <li><Link className="dropdown-item" value="general" to="/">General</Link></li>
                                        <li><Link className="dropdown-item" value="business" to="/business">Business</Link></li>
                                        <li><Link className="dropdown-item" value="entertainment" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" value="health" to="/health">Health</Link></li>
                                        <li><Link className="dropdown-item" value="science" to="/science">Science</Link></li>
                                        <li><Link className="dropdown-item" value="sports" to="/sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" value="technology" to="/technology">Technology</Link></li>
                                    </ul>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar