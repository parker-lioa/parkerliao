import React from 'react'
import './Navigation.scss'

export default function Navigation() {
    return (
        <div className="nav-bar">
            <div className="logo"><a>ParkerLiao</a></div>
            <ul className="nav-links">
                <li><a>About</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Utils</a></li>
                <li><a>Music</a></li>
            </ul>
        </div>
    )
}
