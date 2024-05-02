import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const mobileOverlayStyles = `absolute bottom-0 opacity-80 h-1/2 w-full bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(' ').join('-').toLowerCase();
  const isAboveSmallScreens = useMediaQuery('(min-width:768px)');
  return isAboveSmallScreens ? (
    <motion.div
      variants={projectVariant}
      className='relative'
    >
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='font-semibold text-red text-lg tracking-widest mt-4 hover:bg-deep-blue hover:text-white duration-500 px-3 py-1'
        >
          LINK
        </a>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        className='w-full h-[400px] object-center'
      />
    </motion.div>
  ) : (
    <div className='relative'>
      <div className={mobileOverlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className='font-semibold text-red text-lg tracking-widest mt-4 hover:bg-deep-blue hover:text-white duration-500 px-3 py-1'
        >
          LINK
        </a>
      </div>
      <img
        src={`../assets/${projectTitle}.png`}
        alt={projectTitle}
        className='w-full h-[400px] object-center'
      />
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id='projects'
      className='pt-48 pb-48'
    >
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-1/3' />
          </div>
        </div>
        <p className='mt-10 mb-10'>
          These are some projects which helped me in expanding my knowledge and
          becoming a better developer.
        </p>
      </motion.div>
      {/* Project section */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          <Project
            title='Project 1'
            description='Developed a social media application its user friendly interface and able to register and authenticate for create a post and to like and comment on that post'
            link='https://github.com/Dhareppahalli310807/Social-Media-Application/'
          />
          <Project
            title='Project 2'
            description='Developed The Job Portal Application Its Allow to Recruiters To Post And Manage Job Listing And Provides The User Friendly for Job Seekers To Find And Apply Suitable Job Role.'
            link='https://github.com/Dhareppahalli310807/Job_Portal_Application_Using_ExpressJs/'
          />
          {/* row 2*/}
          <Project
            title='Project 3'
            description='Developed The E-Commerce Application Its Allow to Add Product, delete a Product And Provides The User Friendly To Like a Product and Add to CartItems.'
            link='https://github.com/Dhareppahalli310807/E-Commerce-Application-Using-REST-API/'
          />
          <Project
            title='Project 4'
            description='Developed The Inventory Application Its Allow to Add Product, delete a Product.'
            link='https://github.com/Dhareppahalli310807/Inventory_Application-Project/'
          />
          <Project
            title='Project 5'
            description='Blogify is a simple and intuitive blogging platform that provides you with a platform to share your thoughts, experiences, and knowledge.'
            link='https://github.com/Dhareppahalli310807/Blogify-Project-Using-EJS-Javascript'
          />
          <Project
            title='Project 6'
            description='Developed Music Player Using HTML & CSS.'
            link='https://github.com/Dhareppahalli310807/Web_Development_Using_CSS_Music_Studio/'
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;
