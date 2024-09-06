import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { menu, close } from '../assets';
import { bkjjlogo } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);

        
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${isScrolled ? 'bg-white' : '' // Set black background when scrolled
        } ${styles.paddingX} w-full flex items-center py-6 fixed top-0 z-20 transition-all`}
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
              src={bkjjlogo}
              alt='JJ Logo'
              className='logo'
              style={{ width: '45px', height: '45px' }}
            />
          )}
          <p className={`text-[20px] font-bold cursor-pointer ${isScrolled ? 'text-black slide-right active' : 'text-white slide-right'}`}>
            Jarred Johnson
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${isScrolled ? 'text-black' : 'text-white'
                } font-bold text-[14px] tracking-[3px] cursor-pointer `}
              onClick={() => setActive(link.title)}
              style={{ fontWeight: 400 }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? menu : close}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded -xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//rafce + tab