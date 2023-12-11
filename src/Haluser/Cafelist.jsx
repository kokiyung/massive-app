import Navbar from "../../Components/Navbar";
import './homestyle.css'
import Card from '../../Components/Card'

function Cafelist(){
    return(
        <>
        <Navbar />
        {/* Cafe */}
            <section className="cafe" id="cafe">
                Recomended cafe with high rating
                <h1>Cafe Recomended</h1>
                <div className="cafelist">
                    <Card />
                    <Card />
                    <Card />

                </div>
            </section>

        </>
    )
}
export default Cafelist
