import React, { Component } from 'react'
import '../Assets/Style/Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <div className='sticky'>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" id='navbar'>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">NewsMonkey</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="categoryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="categoryDropdown" style={{height: 'calc( 5 * 100% )', overflow:'auto'}}>
                                        <li><a className="dropdown-item" value="business" href="/">Business</a></li>
                                        <li><a className="dropdown-item" value="entertainment" href="/">Entertainment</a></li>
                                        <li><a className="dropdown-item" value="general" href="/">General</a></li>
                                        <li><a className="dropdown-item" value="health" href="/">Health</a></li>
                                        <li><a className="dropdown-item" value="science" href="/">Science</a></li>
                                        <li><a className="dropdown-item" value="sports" href="/">Sports</a></li>
                                        <li><a className="dropdown-item" value="technology" href="/">Technology</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/" id="countryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="countryDropdown" style={{height: 'calc( 5 * 100% )', overflow:'auto'}}>
                                        <li><a className="dropdown-item" value="ae" href="/">ae</a></li>
                                        <li><a className="dropdown-item" value="ar" href="/">ar</a></li>
                                        <li><a className="dropdown-item" value="at" href="/">at</a></li>
                                        <li><a className="dropdown-item" value="au" href="/">au</a></li>
                                        <li><a className="dropdown-item" value="be" href="/">be</a></li>
                                        <li><a className="dropdown-item" value="bg" href="/">bg</a></li>
                                        <li><a className="dropdown-item" value="br" href="/">br</a></li>
                                        <li><a className="dropdown-item" value="ca" href="/">ca</a></li>
                                        <li><a className="dropdown-item" value="ch" href="/">ch</a></li>
                                        <li><a className="dropdown-item" value="cn" href="/">cn</a></li>
                                        <li><a className="dropdown-item" value="co" href="/">co</a></li>
                                        <li><a className="dropdown-item" value="cu" href="/">cu</a></li>
                                        <li><a className="dropdown-item" value="cz" href="/">cz</a></li>
                                        <li><a className="dropdown-item" value="de" href="/">de</a></li>
                                        <li><a className="dropdown-item" value="eg" href="/">eg</a></li>
                                        <li><a className="dropdown-item" value="fr" href="/">fr</a></li>
                                        <li><a className="dropdown-item" value="gb" href="/">gb</a></li>
                                        <li><a className="dropdown-item" value="gr" href="/">gr</a></li>
                                        <li><a className="dropdown-item" value="hk" href="/">hk</a></li>
                                        <li><a className="dropdown-item" value="hu" href="/">hu</a></li>
                                        <li><a className="dropdown-item" value="id" href="/">id</a></li>
                                        <li><a className="dropdown-item" value="ie" href="/">ie</a></li>
                                        <li><a className="dropdown-item" value="il" href="/">il</a></li>
                                        <li><a className="dropdown-item" value="in" href="/">in</a></li>
                                        <li><a className="dropdown-item" value="it" href="/">it</a></li>
                                        <li><a className="dropdown-item" value="jp" href="/">jp</a></li>
                                        <li><a className="dropdown-item" value="kr" href="/">kr</a></li>
                                        <li><a className="dropdown-item" value="lt" href="/">lt</a></li>
                                        <li><a className="dropdown-item" value="lv" href="/">lv</a></li>
                                        <li><a className="dropdown-item" value="ma" href="/">ma</a></li>
                                        <li><a className="dropdown-item" value="mx" href="/">mx</a></li>
                                        <li><a className="dropdown-item" value="my" href="/">my</a></li>
                                        <li><a className="dropdown-item" value="ng" href="/">ng</a></li>
                                        <li><a className="dropdown-item" value="nl" href="/">nl</a></li>
                                        <li><a className="dropdown-item" value="no" href="/">no</a></li>
                                        <li><a className="dropdown-item" value="nz" href="/">nz</a></li>
                                        <li><a className="dropdown-item" value="ph" href="/">ph</a></li>
                                        <li><a className="dropdown-item" value="pl" href="/">pl</a></li>
                                        <li><a className="dropdown-item" value="pt" href="/">pt</a></li>
                                        <li><a className="dropdown-item" value="ro" href="/">ro</a></li>
                                        <li><a className="dropdown-item" value="rs" href="/">rs</a></li>
                                        <li><a className="dropdown-item" value="ru" href="/">ru</a></li>
                                        <li><a className="dropdown-item" value="sa" href="/">sa</a></li>
                                        <li><a className="dropdown-item" value="se" href="/">se</a></li>
                                        <li><a className="dropdown-item" value="sg" href="/">sg</a></li>
                                        <li><a className="dropdown-item" value="si" href="/">si</a></li>
                                        <li><a className="dropdown-item" value="sk" href="/">sk</a></li>
                                        <li><a className="dropdown-item" value="th" href="/">th</a></li>
                                        <li><a className="dropdown-item" value="tr" href="/">tr</a></li>
                                        <li><a className="dropdown-item" value="tw" href="/">tw</a></li>
                                        <li><a className="dropdown-item" value="ua" href="/">ua</a></li>
                                        <li><a className="dropdown-item" value="us" href="/">us</a></li>
                                        <li><a className="dropdown-item" value="ve" href="/">ve</a></li>
                                        <li><a className="dropdown-item" value="za" href="/">za</a></li>
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
