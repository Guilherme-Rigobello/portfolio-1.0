import React, { useEffect, useRef } from 'react';
// Component Import
import ContainerText from '../ContainerText/ContainerText';
// React Icons Import
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCss3,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { BsFiletypeSql } from 'react-icons/bs';
import { DiMongodb } from 'react-icons/di';

// CSS Import
import './Skills.css';

function Skills() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const elemScroll = scrollRef.current;
    const elemContainer = elemScroll.querySelector('.scroll__container');
    const elemChildren = Array.from(elemContainer.children);

    elemChildren.forEach((item) => {
      const itemDuplicado = item.cloneNode(true);
      elemContainer.appendChild(itemDuplicado);
    });
  }, []);

  return (
    <section className='d-flex align-items-center justify-content-center flex-column skills-section mt-5'>
      <ContainerText text='💻 Skills' />
      <h2>Tecnologias e Habilidades</h2>

      <div className='scroll' ref={scrollRef}>
        <div className='scroll__container'>
          <div className='scroll__item'>
            <FaReact color='#61DBFB' />
          </div>
          <div className='scroll__item'>
            <FaNodeJs color='#68A063' />
          </div>
          <div className='scroll__item'>
            <FaFigma color='#F24E1E' />
          </div>
          <div className='scroll__item'>
            <FaGitAlt color='#F1502F' />
          </div>
          <div className='scroll__item'>
            <FaGithub color='#8A8A8A' />
          </div>
          <div className='scroll__item'>
            <FaCss3 color='#1572B6' />
          </div>
          <div className='scroll__item'>
            <IoLogoJavascript color='#F7DF1E' />
          </div>
          <div className='scroll__item'>
            <BsFiletypeSql color='#CC2927' />
          </div>
          <div className='scroll__item'>
            <DiMongodb color='#4DB33D' />
          </div>
          <div className='scroll__item'>
            <FaBootstrap color='#7952b3' />
          </div>

          <div className='scroll__item scroll__item--fake'>
            <FaReact color='#61DBFB' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            <FaNodeJs color='#68A063' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            <FaFigma color='#F24E1E' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            <FaGitAlt color='#F1502F' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            <FaGithub color='#8A8A8A' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            <FaCss3 color='#1572B6' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            <IoLogoJavascript color='#F7DF1E' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            <BsFiletypeSql color='#CC2927' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            <DiMongodb color='#4DB33D' />
          </div>
          <div className='scroll__item scroll__item--fake'>
            {' '}
            <FaBootstrap color='#7952b3' />{' '}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
