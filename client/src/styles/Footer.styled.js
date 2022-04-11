import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  height: 100%;
  background: #333;

  .footer {
    max-width: var(--max-width);
    height: 10rem;
    margin: 0 auto;
  }

  .copyrights {
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 0.8rem;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 30px;
  }
`;

export default Wrapper;
