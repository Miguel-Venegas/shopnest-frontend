const Label = ({htmlFor, description}) => {
  return (
    <label 
      htmlFor={htmlFor}
      className="field-label"
    >
      {description}
    </label>
  );
};

export default Label;