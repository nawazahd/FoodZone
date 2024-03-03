// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/mohammed-nawaz-5544421bb/"
        target="_blank"
        title="Nawaz Ahmed's Linkedin Profile"
      >
        Nawaz Ahmed
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Zone</span>
        </strong>
    </div>
  );
};

export default Footer;
