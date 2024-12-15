// Components Import
import ContainerText from '../ContainerText/ContainerText';
// CSS Import
import './Card.css';
import { FaLongArrowAltRight } from "react-icons/fa";

function Card({ title, description, languages, imageSrc, githubLink }) {
  return (
    <a href={githubLink} className='col transparent rounded d-flex flex-column text-decoration-none' target='_blank' rel='noopener noreferrer'>
      <p className='title'>
        {title} <FaLongArrowAltRight className='arrow ms-1' />
      </p>
      <p className='span-portfolio mb-3'>{description}</p>
      <div className='language d-flex flex-wrap gap-2'>
        {languages.map((lang, index) => (
          <ContainerText key={index} text={lang} />
        ))}
      </div>
      {imageSrc && (
        <div className='text-center'>
          <img src={imageSrc} alt={title} className='img-fluid' />
        </div>
      )}
    </a>
  );
}

export default Card;
