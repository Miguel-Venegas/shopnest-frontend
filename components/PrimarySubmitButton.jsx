const PrimarySubmitButton = ({ description }) => {
  return (
    <button type="submit" className="button-primary">
      {description}
    </button>
  );
};

export default PrimarySubmitButton;