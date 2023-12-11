import './admin.css'
import Sidebar from '../../Components/Sidebarmitra.jsx'

function Mitra(){
    return(
        <>
        <div className="containers">
           <Sidebar />
           <section className="konten">
        <div className="akun">
          <p>Meine Welt Cafe</p>
        </div>
        <div class="mainconten">
          <h1>Order History</h1>
          <table>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Payment</th>
              <th>Time Remaining</th>
              <th>Type</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>#12345</td>
              <td>Khoirul</td>
              <td>Cas</td>
              <td>30 min</td>
              <td>dine In</td>
              <td>Collected</td>
              <td>RP 15.000</td>
            </tr>
            <tr>
              <td>#12345</td>
              <td>Khoirul</td>
              <td>Cas</td>
              <td>30 min</td>
              <td>dine In</td>
              <td>Collected</td>
              <td>RP 15.000</td>
            </tr>
            <tr>
              <td>#12345</td>
              <td>Khoirul</td>
              <td>Cas</td>
              <td>30 min</td>
              <td>dine In</td>
              <td>Collected</td>
              <td>RP 15.000</td>
            </tr>
            <tr>
              <td>#12345</td>
              <td>Khoirul</td>
              <td>Cas</td>
              <td>30 min</td>
              <td>dine In</td>
              <td>Collected</td>
              <td>RP 15.000</td>
            </tr>
          </table>
        </div>
      </section>

        </div>
        </>
    )
}
export default Mitra