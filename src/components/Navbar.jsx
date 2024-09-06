import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants'; // Adjust the path as necessary
import { jjlogo, menu, close } from '../assets';
import { styles } from '../styles';
import ConnectModal from './ConnectModal'; // Import ConnectModal component

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <nav
      className={`${isScrolled ? 'bg-white' : ''} ${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 transition-all`}
    >
      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          {isScrolled && (
            <img
              src={jjlogo}
              alt='JJ Logo'
              className='logo'
              style={{ width: '45px', height: '45px' }}
            />
          )}
          <p className={`text-[20px] font-bold cursor-pointer ${isScrolled ? 'text-black' : 'text-white'}`}>
            Jarred Johnson
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${isScrolled ? 'text-black' : 'text-white'} font-bold text-[14px] cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                if (link.id === 'connect') {
                  handleModalOpen(); // Open the modal if 'Connect' is clicked
                }
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? menu : close}
            alt='menu'
            className='w-[28px] h-[28px] cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                    if (link.id === 'connect') {
                      handleModalOpen(); // Open the modal if 'Connect' is clicked
                    }
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ConnectModal isOpen={isModalOpen} onClose={handleModalClose} /> {/* Render modal */}
    </nav>
  );
};

export default Navbar;



//rafce + tab