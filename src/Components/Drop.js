import './CSS/Drop.css';
import profile from './Image/profile.jpg';
import {FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare} from "react-icons/fa";

 
function Drop(props){
    
    return(
        <div className="drop">
            <div className="img">
                <img src={profile} alt='profile' className='proimg' />
           </div>
            <div className='name'>{props.name}</div>

            <div className='icon'>
                <ul className='ulicon'>
                    <li>
                    <a href='https://twitter.com/NisthaPatel13?t=xVxnMcQ2aDi_ZmWqid0oIw&s=08'><FaTwitterSquare size={25} /></a>
                        <a href='https://www.facebook.com/nistha.patel.1428'><FaFacebookSquare size={25} /> </a>
                        <a href='https://www.instagram.com/patelnistha987/'><FaInstagramSquare size={25} /></a>
                        <a href='https://www.linkedin.com/in/nistha-patel-093473193'><FaLinkedin size={25} /></a>
                    </li>
                </ul>
            </div>
            <div id='navbar'>
           <ul className='ul'>
            <li><a href="#home" className='btn active'>Home</a></li>
            <li><a href="#about"  className='btn'>About</a></li>
            <li><a href="#resume" className='btn'>Resume</a></li>
            <li><a href="#contact" className='btn'>Contact</a></li>
            </ul></div>            


           </div>
    )
}

export default Drop;