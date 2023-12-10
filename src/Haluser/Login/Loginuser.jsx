import './stylelogin.css'
import { Link } from 'react-router-dom'

function Loginuser(){
    const Pesancolor1 = {
        color : '#603813'
    }
    const Pesancolor2 = {
        color : '#FCB040'
    }

    return(
        <div className="container">
            <div className="leftside">
                <div class="contentleft">
                    <div style={Pesancolor1}>Pesan</div>
                    <div style={Pesancolor2}>In</div>
                </div>
            </div>
            <div className="rightside">
                <h1>Login</h1>
                <div className="inputform">
                <form action="">
                <input type="text" placeholder="Username" /> <br />
                <input type="password" placeholder="Password" /><br />
                </form>
                <div className="loginbutton">
            <button><Link to='/'>Login</Link></button>
            <button><Link to='../Registeruser'>Register</Link></button>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Loginuser;