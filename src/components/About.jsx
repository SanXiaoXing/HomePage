import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import i18n from "../utils/i18n";

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='scattered w-full p-[1px] rounded-[20px] shadow-card'
  >
    <div
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transform transition-transform duration-300 hover:scale-105'
    >
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain'
      />
      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
</div>
);

const About = () => {
  const t = i18n.t;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('Introduction')}</p>
        <h2 className={styles.sectionHeadText}>{t('Overview')}.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {t('description_details')}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
