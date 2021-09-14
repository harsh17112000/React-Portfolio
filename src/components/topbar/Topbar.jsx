import React from 'react'
import "./topbar.scss"
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';

const Topbar = ({menuOpen,setMenuOpen}) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}> 
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Meet.</a>
                    <div className="itemContainer">
                        <PersonIcon className="icon" />
                        <span>+91 8989896745</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span>meet@email.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar

// click pr actice class add krie 6