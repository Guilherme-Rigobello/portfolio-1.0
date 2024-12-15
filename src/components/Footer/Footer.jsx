// React Icons Import
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
// CSS Import
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className='content d-flex align-items-center justify-content-center'>
        <p className='p-copi'>Feito por <a href='https://github.com/Guilherme-Rigobello' target='_blank' className='a'>Guilherme Rigobello</a> · 2024</p>
      </div>
      <ul className='ul-footer d-flex align-items-center justify-content-center'>
        <li>
          <FaGithubSquare />
        </li>
        <li className='mx-2'>
          <FaLinkedin />
        </li>
      </ul>
  </footer>
  );
}

export default Footer;
