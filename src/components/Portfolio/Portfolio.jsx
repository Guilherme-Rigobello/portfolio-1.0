// Components Import
import './Portfolio.css';
import Card from '../Card/Card';
import ContainerText from '../ContainerText/ContainerText';
// Img's
import Img1 from '../../assets/projects/Img-1.svg';
import Img2 from '../../assets/projects/Img-2.svg';
import Img3 from '../../assets/projects/Img-3.svg';
import Img4 from '../../assets/projects/Img-4.svg';
import Img5 from '../../assets/projects/Img-5.svg';
import Img6 from '../../assets/projects/Img-6.svg';
// CSS Import
import '../ContainerText/ContainerText.css';

function Portfolio() {
  const projects = [
    {
      title: 'EcoLeaf',
      description:
        'EcoLeaf é uma empresa especializada em jardinagem e manutenção de ambientes verdes. Promove soluções sustentáveis para transformar e cuidar de ambientes com foco na sua preservação.',
      languages: ['Nodejs', 'MongoDB'],
      imageSrc: Img1,
      githubLink: 'https://github.com/vbzt/EcoLeaf',
    },
    {
      title: 'Weather Forecast',
      description:
        'Aplicação web realizada em React + Vite, API OpenWeatherMap e Axios onde é possível observar a previsão do tempo em qualquer cidade do mundo!',
      languages: ['Vite + React', 'API'],
      imageSrc: Img2,
      githubLink: 'https://guilherme-rigobello.github.io/weather-forecast',
    },
    {
      title: 'Syncro',
      description:
        'Aplicação web onde é possível gerenciar projetos e seus serviços associados. Ele permite criar, editar e excluir projetos, adicionar serviços, e controlar custos de forma prática e eficiente.',
      languages: ['React', 'JSON Server'],
      imageSrc: Img3,
      githubLink: 'https://github.com/Guilherme-Rigobello/syncro',
    },
    {
      title: 'Films Lib',
      description:
        'A movie catalog where you can search and see the details of any movie using the TMDB API. React + Vite (Frontend); Consumindo API do TMDB para exibição dos filmes.',
      languages: ['Vite + React ', 'API'],
      imageSrc: Img4,
      githubLink: 'https://films-lib-hazel.vercel.app',
    },
    {
      title: 'Cristal Terapias',
      description:
        'Freelancer de terapias desenvolvido com React + Vite, utilizando Tailwind CSS para um design moderno e responsivo. As animações foram criadas com Framer Motion.',
      languages: ['Tailwind CSS', 'React'],
      imageSrc: Img5,
      githubLink: 'https://github.com/Guilherme-Rigobello/cristal-terapias',
    },
    {
      title: 'Meu Portfolio',
      description:
        'Portfolio pessoal desenvolvido com React + Vite, focando no treinamento de novas tecnologias e na apresentação simplificada de informações.',
      languages: ['My Portfolio', 'React'],
      imageSrc: Img6,
      githubLink: 'https://github.com/Guilherme-Rigobello/portfolio-1.0',
    },
  ];

  return (
    <section className='w-100 portfolio'>
      <div className='texts-portfolio w-100'>
        <ContainerText text='🔗 Portfólio' />
        <h2>Projetos e Repositórios</h2>
      </div>

      <div className='pai-grid row row-cols-1 row-cols-sm-2 row-cols-lg-3 mt-5'>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            languages={project.languages}
            imageSrc={project.imageSrc}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
