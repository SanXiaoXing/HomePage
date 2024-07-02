import React, { useState } from 'react';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import i18n from '../utils/i18n';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
      className='project-card-container scattered'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`project-card ${hovered ? 'hovered' : ''}`}>
        <div className='image-container'>
          <img src={image} alt='project_image' className='project-image' />
          <div className={`overlay ${hovered ? 'visible' : ''}`}></div>
        </div>
        <div className={`content ${hovered ? 'visible' : ''}`}>
          <div className='content-header'>
            <h3 className='project-name'>{name}</h3>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
          <p className='project-description'>{description}</p>
          <div className='tags'>
            {tags.map((tag) => (
              <span key={`${name}-${tag.name}`} className={`tag ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const Works = () => {
  const t = i18n.t;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          {t('my_work')}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>{t('projects')}.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          {t('projects_description')}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
