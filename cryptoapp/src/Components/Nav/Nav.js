import React,{useEffect,useState} from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import NetFlixLogo from "../Images/NetFlixLogo.png";
import NetflixAvatar from "../Images/NetflixAvatar.png";

const Nav = () => {
    const[show,setShow] = useState(false);

    const NavBarVisibility = () => {
        if(window.scrollY > 100) {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }
    useEffect (() => {
        window.addEventListener("scroll",NavBarVisibility);

        return () =>{
            window.removeEventListener("scroll",NavBarVisibility);
        }
    },[]);
    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <Link to ='/'>
                <img src={NetFlixLogo} className='nav-logo' alt='logo'/>
            </Link>
            <img src={NetflixAvatar} className='nav-avatar' alt='logo'/>
        </div>
    );

};

export default Nav;