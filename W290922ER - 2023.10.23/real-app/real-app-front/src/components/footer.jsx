const Footer = () => {
  return (
    <div className="border-top py-2 text-center">
      <span>
        Real<i className="bi bi-geo-fill"></i>App
      </span>
      <span className="mx-2">&copy;</span>
      <span>{new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
