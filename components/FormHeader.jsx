const FormHeader = ({title, imgSource, altDescription}) => {
  return (
    <div className="content-column">
      {
        (imgSource !== "") &&
      <img
        alt={altDescription}
        src={imgSource}
        className="centered-media"
      />
      }
      <h2 className="section-title">
        {title}
      </h2>
    </div> 
  );
};

export default FormHeader;