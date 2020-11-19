import React, {useState} from 'react'
import './Navigation.scss'

export default function Navigation() {

    const [shownav,setShownav] = useState(false);

    const click_hamburger = (e)=>{
        setShownav(!shownav);

    }

    return (
        <div className="nav-bar">
            <div className="logo"><a href="/">ParkerLiao</a></div>
            <ul className={shownav?"nav-links display-nav":"nav-links"}>
                <li><a href="about">About</a></li>
                <li><a href="portfolio">Portfolio</a></li>
                <li><a href="utils">Utils</a></li>
                <li><a href="music">Music</a></li>
            </ul>
            {
                !shownav?<div className="hamburger" onClick={click_hamburger}>
                <div></div>
                <div></div>
                <div></div>
                </div>:<div className="x" onClick={click_hamburger}>
                <div id="x1"></div>
                <div id="x2"></div>
            </div>
            }
            
        </div>
    )
}

