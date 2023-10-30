const PageHeader = ({ title, description }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1>{title}</h1>
        </div>
        {description && <div className="col-12">{description}</div>}
      </div>
    </>
  );
};

export default PageHeader;
