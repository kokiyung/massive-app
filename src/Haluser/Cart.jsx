import Card from '../../Components/Card'
import Footer from '../../Components/Footer'
import Navbarin from '../../Components/Navbarin'
import './cartstyle.css'

function Cart(){
    return(
        <>
        <Navbarin />
        <div className="container">
            <Card />
            <div className="struk">
            <table>
                <tr>
                    <th>Menu</th>
                    <th>ORDER</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>rashberry</td>
                    <td>1</td>
                    <td>Rp. 15.000</td>
                    <td>RP 15.000</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Tax</td>
                    <td>RP. 15.000</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>RP. 15.000</td>
                </tr>
            </table>
            <div className="confirmpay">
                <div><a href="menucafe.html">Add Menu</a></div>
                <div><a href="cart.html">Check Out</a></div>
            </div>
        </div>
        </div>
        <Footer />
        </>

    )
}
export default Cart