//Components Import
import './Home.css';
import Me from '../../assets/person/me.png';
import ContainerText from '../ContainerText/ContainerText';
import Curriculo from '../../../public/curriculo/MyProfile.pdf';

//React Icons Import
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { MdDownload, MdMarkEmailRead    } from 'react-icons/md';



function Home() {
  return (
    <main className='container d-flex justify-content-center align-items-center'>
      <div className='info'>
        <ContainerText text={'👋 Hello World!'} />
        <h1 className='mt-4 mb-3'>
          Guilherme <br />
          Rigobello
        </h1>
        <span className='job'>Full Stack Developer .</span>
        <div className='socials mt-3'>
          <span className='li'>
            <a
              href='https://github.com/Guilherme-Rigobello'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare />
            </a>
          </span>
          <span className='li'>
            <a
              href='https://www.linkedin.com/in/guilhermerigobello-/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='ms-2' />
            </a>
          </span>
        </div>
      </div>
      <div className='img-center'>
        <img src={Me} width='350px' />
      </div>
      <div className='download d-flex flex-column'>
        <a className='load text-center' href={Curriculo} target='_blanck'>
          Meu CV <MdDownload className='icon' />
        </a>
        <a
          className='talk mt-4 d-flex align-items-center'
          href='mailto:grigobello@proton.me'
        >
          Let's Talk{' '}
          <span className='ms-2 mb-1'>
            <MdMarkEmailRead   />
          </span>
        </a>
      </div>
    </main>
  );
}

export default Home;
