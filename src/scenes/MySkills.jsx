import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section
      id='skills'
      className='pt-10 pb-24'
    >
      {/* Header and image section */}
      <div className='md:flex md:justiy-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            MY <span className='text-red'>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7 font-opensans tracking-wider leading-6'>
            {/* c/c++ mysql  */}I have developed skills in mordern
            web-development with strong base of{' '}
            <span className='text-red font-semibold'>JavaScript, HTML, CSS, Node.js, SQL, MongoDB, Java</span> and
            proficient knowledge in{' '}
            <span className='text-yellow font-semibold'>MERN stack</span>, use
            of <span className='text-blue font-semibold'>GIT & Github</span>,
            generating{' '}
            <span className='text-yellow font-semibold'>RESTapi</span> and
            server side code for backend and testing of API in{' '}
            <span className='text-blue font-semibold'>Postman</span>.also with
            different libraries like{' '}
            <span className='text-yellow font-semibold'>
              EXpress.js, Socket.io, React.js & Bootstrap
            </span>.
          </p>
        </motion.div>
        <div className='mt-16 md:mt-0'>
          {isAboveMediumScreens ? (
            <div className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]'>
              <img
                alt='skills'
                src='../assets/skills-image.png'
                className='z-10'
              />
            </div>
          ) : (
            <img
              alt='skills'
              src='../assets/skills-image.png'
              className='z-10'
            />
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className='md:flex md:justify-between mt-16 gap-32'>
        {/* Experience */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>01</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Experience
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
          </div>
          <p className='mt-5'>
          I was particularly drawn to Edgeverve System limited focused on specific area like to fix clients bugs,
          add new requirements in application as per the Clint expectation,
          along with handle customers data using postgres and Oracle DB,
          Worked on Java, JavaScript, HTML, CSS, Bootstrap, React.js, Express.js, node.js ,postgres SQl and Oracle SQL.
          </p>
        </motion.div>
        {/* Innovative */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>02</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Innovative
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
          </div>
          <p className='mt-5'>
            Developed innovative solutions and designs for personal projects and
            learned new ways to do things.
          </p>
        </motion.div>
        {/* Imaginative */}
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10'>
              <p className='font-playfair font-semibold text-5xl'>03</p>
              <p className='font-playfair font-semibold text-3xl mt-3'>
                Imaginative
              </p>
            </div>
            <div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
          </div>
          <p className='mt-5'>
            Cool animations and smooth flow in websites have always struck me
            with awe. Repeating those designs to understand how they work surely
            affected my imagination of new design ideas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default MySkills;
