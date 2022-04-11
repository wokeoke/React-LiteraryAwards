import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navLinks as links } from '../../helpers/links';
import Wrapper from '../../styles/Navbar.styled';

const Navbar = () => {
  useEffect(() => {
    function navigation() {
      let navbar = document.querySelector('.navbar');
      const scrollY = window.scrollY;

      if (scrollY >= 100) {
        navbar.classList.add('show-navbar');

        setTimeout(function () {
          navbar.style.transform = 'translateY(0px)';
        }, 200);
      } else {
        if (scrollY === 0) {
          navbar.classList.remove('show-navbar');
          clearTimeout();
        }
      }
    }
    window.addEventListener('scroll', navigation);
    return () => {
      window.removeEventListener();
    };
  }, []);

  return (
    <Wrapper>
      <div className="navbar">
        <div className="nav-header"></div>
        <div className="nav-links">
          <ul>
            {links.map((link) => {
              const { id, title, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-user"></div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
