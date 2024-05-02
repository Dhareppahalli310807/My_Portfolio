import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { AnimatePresence, motion } from 'framer-motion';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-yellow' : ''}
                hover:text-yellow transition duration-500
            `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width:768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-red';
  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        <h4 className='font-playfair text-3xl font-bold'>SS</h4>

        {/**Desktop nav */}
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Skills'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page='Testimonials'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className='rounded-full bg-red p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img
              src='../assets/menu-icon.svg'
              alt='menu-icon'
            />
          </button>
        )}

        {/**Mobile menu popup */}
        <AnimatePresence>
          {!isAboveSmallScreens && isMenuToggled && (
            <motion.div
              className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'
              initial='hidden'
              whileInView='visible'
              exit='exit'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: 100 },
              }}
            >
              {/**close icon */}
              <div className='flex justify-end p-12'>
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img
                    src='../assets/close-icon.svg'
                    alt='close-icon'
                  />
                </button>
              </div>
              {/**menu items */}
              <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                <Link
                  page='Home'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page='Skills'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page='Projects'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/* <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
                <Link
                  page='Contact'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
