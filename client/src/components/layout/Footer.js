import Wrapper from "../../styles/Footer.styled";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer">
        <span className="copyrights">
          &copy; {new Date().getFullYear()} | react literary awards
        </span>
      </div>
    </Wrapper>
  );
};
export default Footer;
