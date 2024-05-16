import { Link } from 'react-router-dom'
import '../components/navbarStyle.css'

function Navbar() {
    return(
        <header>
            <div className="logo">
                <h1>TripGraphix</h1>
            </div>
            <ul className="links">
              <Link to="/local" ><li>Regiões</li></Link>  
                <li>Cidades</li>
                <li>Locais Mais Visitados</li>
            </ul>
        </header>
    )
}
export default Navbar