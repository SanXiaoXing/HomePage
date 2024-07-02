import { motion } from "framer-motion";

import { styles } from "../styles";
import i18n from "../utils/i18n";

const Hero = () => {
  const t = i18n.t;
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t('welcome')}<span className='text-[#915EFF]'>SanXiaoXing</span>
          </h1>
          <br />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {t('description_1')} <br className='sm:block hidden' />
          {t('description_2')}
          </p>

          <div className="flex flex-row justify-center items-center">
            <img
              src="./logo.svg"
              alt="logo"
              className="w-full sm:w-1/4 md:w-1/3 lg:w-1/2 xl:w-3/4"
              style={{ maxWidth: "600px", height: "auto" }}
            />
          </div>
          
        </div>
      </div>
      

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      
    </section>
  );
};

export default Hero;