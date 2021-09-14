import React, { useEffect,useRef } from 'react'
import "./intro.scss";
import { init } from 'ityped'

const Intro = () => {

    const textRef = useRef();
    console.log(textRef);

    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings:["Full Stack Developer","Freelancer","done"]
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assest/meet.png" alt="manimg" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There,I'm</h2>
                    <h1>Meet Prajapati</h1>
                    <h3>Web Developer <span ref={textRef}></span></h3>
                </div>

                <a href="#portfolio">
                    <img src="assest/down.png" alt="down" />
                </a>
            </div>
        </div>
    )
}

export default Intro


// use Ref no use refrence mate means te span ne get karva mate jm js ma
// document get elment id krta em , ityped nu use ma jovu react ma import mate su krvu
// ema hse