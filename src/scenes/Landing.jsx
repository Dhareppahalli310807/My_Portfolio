import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../components/SocialMediaIcons';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');

  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center gap-16  py-10'
    >
      {/** removed md:h-full */}
      {/**image section */}
      <div className='basis-1/2 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
        {isAboveMediumScreens ? (
          <div
            className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'
          >
            <img
              alt='profile'
              src='../assets/My_Photo.jpg'
              className='hover:filter hover:saturate-150 hover:contrast-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px] '
            />
          </div>
        ) : (
          <img
            alt='profile'
            src='../assets/My_Photo.jpg'
            className='hover:filter hover:saturate-150 hover:contrast-150 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px] '
          />
        )}
      </div>
      {/**text section */}
      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        {/**headings section */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='text-6xl font-playfair z-10 text-center md:text-start'>
            Dhareppa{' '}
            <span className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'>
              Halli
            </span>
          </p>
          <p className='mt-10 mb-7 text-sm text-center md:text-start font-opensans tracking-wider leading-5 '>
          Seasoned Software Developer with 1+ years of experience in the industry. Proven ability to design, develop, and implement software solutions.
          </p>
        </motion.div>
        {/**Call to action */}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className='bg-gradient-rainblue text-deep-blue rounded-l-lg py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className='rounded-r-lg bg-gradient-rainblue-180 py-0.5 pr-0.5'
            onClick={() => setSelectedPage('contact')}
            href='#contact'
          >
            <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10 rounded-lg'>
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
