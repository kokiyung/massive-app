import Footer from '../../Components/Footer'
import Navbarin from '../../Components/Navbarin'
import './cartstyle.css'

function Payment(){
    return(
        <>
        <Navbarin />
        <div className="container">
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
                    <td>RP. 1500</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>RP. 16.500</td>
                </tr>
            </table>
            
        </div>
        {/* Payment */}
        <div className="paymentmethode">
            <div className="payopsi">
                <div>Cash</div>
                <div>Debit</div>
            </div>
            <div className="paybank">
                <div><img src="Img/payment/OVO.png" alt="" /></div>
                <div><img src="Img/payment/BCA_logo_Bank_Central_Asia.png" alt="" /></div>
                <div><img src="Img/payment/BNI.png" alt="" /></div>
            </div>
            <div className="paycard">
                <form action="sukses.html">
                    <label for="">Name card</label><br/>
                    <input type="text" placeholder="Input Name Card" /><br/>
                    <label for="">Account Number</label><br/>
                    <input type="text" placeholder="Input account number" /><br/>
                    <label for="">Destination account</label><br/>
                    <input type="text" placeholder="Input destination number"/><br/>
                    <label for="">Nominal</label><br/>
                    <input type="text" placeholder="Input Total"/>
                    <div>
                        <input type="submit" value="Pay Now" />
                    </div>
                </form>
            </div>
        </div>
        </div>
        <Footer />
        </>
    )

}
export default Payment