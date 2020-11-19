import React from 'react'
import './Me.scss'

export default function Me() {
    return (
        <div className="board-container">
            <div className="profile-container">
                <div className="profile-img"></div>
            </div>
            <div className="intro-container">
                <h1>
                    Introduction
                </h1>
                <p>
                    I'm a student who currently study in Yuan Ze University. 
                </p>
               
                <a href="/about">
                    More...
                </a>
               
            </div>
        </div>
    )
}
