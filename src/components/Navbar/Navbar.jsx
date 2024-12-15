// Components Import 
import Logo from '../../assets/logo/Logo.svg';
import imgMe from '../../assets/person/me2.png'
//CSS Import
import './Navbar.css';

function Navbar() {
  return (
    <nav className='nav max mt-4 d-flex align-items-center justify-content-between rounded'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='img-me'>
        <img src={imgMe} width='40px' />
      </div>
    </nav>
  );
}

export default Navbar;
