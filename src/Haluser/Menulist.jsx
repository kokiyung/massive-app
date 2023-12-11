import './homestyle.css'
import Card from '../../Components/Card'
import Navbarin from "../../Components/Navbarin";

function Menulist(){
    return(
        <>
        <Navbarin />
            {/* Menu */}
            <section className="menusection">
            <div className="cafelist">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </section>

        </>
    )
}
export default Menulist
