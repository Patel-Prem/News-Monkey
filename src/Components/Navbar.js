import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../Assets/Style/Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className='sticky'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id='navbar'>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="categoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="categoryDropdown" style={{height: 'calc( 5 * 100% )', overflow:'auto'}}>
                                        <li><Link className="dropdown-item" value="business" to="/business">Business</Link></li>
                                        <li><Link className="dropdown-item" value="entertainment" to="/entertainment">Entertainment</Link></li>
                                        <li><Link className="dropdown-item" value="general" to="/">General</Link></li>
                                        <li><Link className="dropdown-item" value="health" to="/">Health</Link></li>
                                        <li><Link className="dropdown-item" value="science" to="/">Science</Link></li>
                                        <li><Link className="dropdown-item" value="sports" to="/">Sports</Link></li>
                                        <li><Link className="dropdown-item" value="technology" to="/">Technology</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" id="countryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="countryDropdown" style={{height: 'calc( 5 * 100% )', overflow:'auto'}}>
                                        <li><Link className="dropdown-item" value="ae" to="/">ae</Link></li>
                                        <li><Link className="dropdown-item" value="ar" to="/">ar</Link></li>
                                        <li><Link className="dropdown-item" value="at" to="/">at</Link></li>
                                        <li><Link className="dropdown-item" value="au" to="/">au</Link></li>
                                        <li><Link className="dropdown-item" value="be" to="/">be</Link></li>
                                        <li><Link className="dropdown-item" value="bg" to="/">bg</Link></li>
                                        <li><Link className="dropdown-item" value="br" to="/">br</Link></li>
                                        <li><Link className="dropdown-item" value="ca" to="/">ca</Link></li>
                                        <li><Link className="dropdown-item" value="ch" to="/">ch</Link></li>
                                        <li><Link className="dropdown-item" value="cn" to="/">cn</Link></li>
                                        <li><Link className="dropdown-item" value="co" to="/">co</Link></li>
                                        <li><Link className="dropdown-item" value="cu" to="/">cu</Link></li>
                                        <li><Link className="dropdown-item" value="cz" to="/">cz</Link></li>
                                        <li><Link className="dropdown-item" value="de" to="/">de</Link></li>
                                        <li><Link className="dropdown-item" value="eg" to="/">eg</Link></li>
                                        <li><Link className="dropdown-item" value="fr" to="/">fr</Link></li>
                                        <li><Link className="dropdown-item" value="gb" to="/">gb</Link></li>
                                        <li><Link className="dropdown-item" value="gr" to="/">gr</Link></li>
                                        <li><Link className="dropdown-item" value="hk" to="/">hk</Link></li>
                                        <li><Link className="dropdown-item" value="hu" to="/">hu</Link></li>
                                        <li><Link className="dropdown-item" value="id" to="/">id</Link></li>
                                        <li><Link className="dropdown-item" value="ie" to="/">ie</Link></li>
                                        <li><Link className="dropdown-item" value="il" to="/">il</Link></li>
                                        <li><Link className="dropdown-item" value="in" to="/">in</Link></li>
                                        <li><Link className="dropdown-item" value="it" to="/">it</Link></li>
                                        <li><Link className="dropdown-item" value="jp" to="/">jp</Link></li>
                                        <li><Link className="dropdown-item" value="kr" to="/">kr</Link></li>
                                        <li><Link className="dropdown-item" value="lt" to="/">lt</Link></li>
                                        <li><Link className="dropdown-item" value="lv" to="/">lv</Link></li>
                                        <li><Link className="dropdown-item" value="ma" to="/">ma</Link></li>
                                        <li><Link className="dropdown-item" value="mx" to="/">mx</Link></li>
                                        <li><Link className="dropdown-item" value="my" to="/">my</Link></li>
                                        <li><Link className="dropdown-item" value="ng" to="/">ng</Link></li>
                                        <li><Link className="dropdown-item" value="nl" to="/">nl</Link></li>
                                        <li><Link className="dropdown-item" value="no" to="/">no</Link></li>
                                        <li><Link className="dropdown-item" value="nz" to="/">nz</Link></li>
                                        <li><Link className="dropdown-item" value="ph" to="/">ph</Link></li>
                                        <li><Link className="dropdown-item" value="pl" to="/">pl</Link></li>
                                        <li><Link className="dropdown-item" value="pt" to="/">pt</Link></li>
                                        <li><Link className="dropdown-item" value="ro" to="/">ro</Link></li>
                                        <li><Link className="dropdown-item" value="rs" to="/">rs</Link></li>
                                        <li><Link className="dropdown-item" value="ru" to="/">ru</Link></li>
                                        <li><Link className="dropdown-item" value="sa" to="/">sa</Link></li>
                                        <li><Link className="dropdown-item" value="se" to="/">se</Link></li>
                                        <li><Link className="dropdown-item" value="sg" to="/">sg</Link></li>
                                        <li><Link className="dropdown-item" value="si" to="/">si</Link></li>
                                        <li><Link className="dropdown-item" value="sk" to="/">sk</Link></li>
                                        <li><Link className="dropdown-item" value="th" to="/">th</Link></li>
                                        <li><Link className="dropdown-item" value="tr" to="/">tr</Link></li>
                                        <li><Link className="dropdown-item" value="tw" to="/">tw</Link></li>
                                        <li><Link className="dropdown-item" value="ua" to="/">ua</Link></li>
                                        <li><Link className="dropdown-item" value="us" to="/">us</Link></li>
                                        <li><Link className="dropdown-item" value="ve" to="/">ve</Link></li>
                                        <li><Link className="dropdown-item" value="za" to="/">za</Link></li>
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
