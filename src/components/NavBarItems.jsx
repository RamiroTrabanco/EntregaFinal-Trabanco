import { Link } from 'react-router-dom'
import '../styles/NavBarItems.css'

let navBarElements = ["GPU", "Procesadores", "Motherboards"]

function NavBarItems() {
    return (
        navBarElements.map((element, index) => <Link className="navBarItemsStyle" key={index} to={`category/${element}`}>{element}</Link>)
    )
}

export default NavBarItems