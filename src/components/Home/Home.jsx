//Components Import
import './Home.css';
import Me from '../../assets/person/me.png';
import ContainerText from '../ContainerText/ContainerText';

//React Icons Import
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { TbBrandWhatsappFilled } from 'react-icons/tb';
import { MdDownload } from 'react-icons/md';

function Home() {
  return (
    <main className='container d-flex justify-content-center align-items-center'>
      <div className='info'>
        <ContainerText text={'👋 Hello World!'} />
        <h1 className='mt-4 mb-3'>
          Guilherme <br />
          Rigobello
        </h1>
        <span className='job'>
         Full Stack Developer .
        </span>
        <div className='socials mt-3'>
          <span className='li'>
            <FaGithubSquare />
          </span>
          <span className='li'>
            <FaLinkedin className='ms-2' />
          </span>
        </div>
      </div>
      <div className='img-center'>
        <img src={Me} width='350px' />
      </div>
      <div className='download d-flex flex-column'>
        <a className='load text-center' href=''>
          Baixar CV <MdDownload className='icon' />
        </a>
        <a className='talk mt-4  d-flex align-items-center '>
          Let's Talk{' '}
          <span className='ms-2 mb-1'>
            <TbBrandWhatsappFilled />
          </span>
        </a>
      </div>
    </main>
  );
}

export default Home;
