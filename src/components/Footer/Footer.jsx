// React Icons Import
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
// CSS Import
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className='content d-flex align-items-center justify-content-center'>
        <p className='p-copi'>
        💡 Made by {' '}
          <a
            href='https://github.com/Guilherme-Rigobello'
            target='_blank'
            className='a'
          >
            Guilherme Rigobello
          </a>{' '}
        </p>
      </div>
      <ul className='ul-footer d-flex align-items-center justify-content-center'>
        <li>
          <a
            href='https://github.com/Guilherme-Rigobello'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithubSquare />
          </a>
        </li>
        <li className='mx-2'>
          <a
            href='https://www.linkedin.com/in/guilhermerigobello-/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
