import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100%;
  height: 100%;

  .navbar {
    width: 100%;
    height: 3.2rem;
    background: transparent;
    transition: all 0.5s ease;
  }

  .show-navbar {
    position: fixed;
    background: #333;
  }

  .show-navbar a {
    color: #fff;
  }

  .nav-links {
    width: 100%;
    height: 100%;
  }

  ul {
    max-width: var(--max-width);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
  }

  a {
    cursor: pointer;
    color: #333;
    margin: 0 10px;
  }
`;

export default Wrapper;
