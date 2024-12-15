// import Css
import './About.css';
// img 
import Img from '../../assets/person/me2.png';
// import Component
import ContainerText from '../ContainerText/ContainerText';

function About() {
  return (
    <section className='about d-flex justify-content-between align-items-center'>
      <div className='content'>
        <ContainerText className='container' text='🧐 Sobre mim' />
        <h1 className='mb-4'>Guilherme Rigobello</h1>
        <p className='resume'>
          👨‍💻 Há mais de 1 ano aprendendo constantemente e desenvolvendo projetos
          para praticar da melhor forma possível 
          <br />
          <br /> 🎓 Atualmente cursando o ensino médio técnico na FIAP{' '}
          <br />
          <br />
          💡 Maior Interesses em desenvolvimento Back-End com Linguagem SQL,
          NoSQL.
        </p>
      </div>
      <div className='img'>
        <img src={Img} alt='img' />
      </div>
    </section>
  );
}

export default About;
