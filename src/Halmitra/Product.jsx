import './admin.css'
import Sidebar from '../../Components/Sidebarmitra.jsx'

function Product(){
    return(
        <>
        <div className="containers">
           <Sidebar />
           <section className="konten">
        <div className="akun">
          <p>Meine Welt Cafe</p>
          <img src="" alt="" />
        </div>
        <div className="mainconten">
          <div>
            <div>
              <h1>Product</h1>
            </div>
            <div>
              <a href="add_product.html" className="btn">+ Add Product</a>
            </div>
          </div>

          <table id="product">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>File Product</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Mie Ayam Special</td>
              <td>Rp.15.000</td>
              <td>Food</td>
              <td>mieayam.jpg</td>
              <td>
                <button className="btn_edit">
                  <a href="edit_pesanan.html">Edit
                    </a>
                </button>
                <br />
                <button className="btn_hapus">Hapus</button>
              </td>
            </tr>
            
          </table>
        </div>
      </section>

        </div>
        </>
    )
}
export default Product