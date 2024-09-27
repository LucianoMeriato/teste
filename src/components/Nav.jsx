import {Link} from 'react-router-dom'
import '../css/NavStyle.css'
 
 
const Nav=()=>{
    return (
        <>
        <div id='menu-nav'>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/produtos" className="nav-link">Músicas</Link>
        </div>
        </>
    )
}
export default Nav