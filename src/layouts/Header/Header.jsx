// IMPORTS
import { Link } from 'react-router-dom'
import './header.scss'


// ASSETS
import Logo from '../../assets/img/argentBankLogo.png'




function Header() {
   return (
      <header>
         <nav className='cont-nav'>

            <Link to="/">
               <img className='logo-header' alt='Logo de Argent Bank' src={Logo} />
            </Link>

            <Link to="/signin">
               <i className="fas fa-user-circle"></i>
               <p>Sign In</p>
            </Link>

         </nav>
      </header>
   )
 }
 
 export default Header