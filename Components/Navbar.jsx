import './Navfoot.css'
import { Link } from 'react-router-dom';

function Navbar(){
    const CBlack = {
        color : 'Black'
    }
    return(
        
    <div className="navbar">
        <div className="logo">
            <div className="firstlogo">Pesen</div>
            <div className="secondlogo">In</div>
            
        </div>
        <div className="sidebutton">
            <div className="firstbutton"><Link to='/'>Home</Link></div>
            <div className="firstbutton"><a href="#about" style={CBlack}>About</a></div>
            <div className="firstbutton"><Link to='Cafe'><a href="" style={CBlack}>Cafe</a></Link></div>
            <div className="secondbutton"><Link to='Loginuser'>Akun</Link></div>
        </div>
    </div>
    );
}
export default Navbar