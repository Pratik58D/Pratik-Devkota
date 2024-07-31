import React from 'react'
import "./Hero.css";
import profile from "../../assets/profile.png"

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile} alt="profile photo" />
        <h1><span>I'm Pratik Devkota,</span> Frontend Devloper in Nepal.</h1>
        <p>I also know the python backend.I am from surkhet Nepal</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
