import React, { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import LineGradient from './components/LineGradient';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
// import Testimonials from './scenes/Testimonials';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';
import HashLoader from 'react-spinners/HashLoader';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    setLoading(true);
    const loader = setTimeout(() => {
      setLoading(false);
    }, 4000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loader);
    };
  }, []);

  return loading ? (
    <div className='loading bg-deep-blue'>
      <HashLoader
        size={150}
        color={'#dc4492'}
        loading={loading}
      />
    </div>
  ) : (
    <div className='app bg-deep-blue'>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className='w-5/6 mx-auto '>
        {/**md:h-full */}
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto '>
        {/**md:h-full */}
        <MySkills />
      </div>
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <Projects />
      </div>
      {/* <LineGradient />
      <div className='w-5/6 mx-auto'>
        <Testimonials />
      </div> */}
      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
