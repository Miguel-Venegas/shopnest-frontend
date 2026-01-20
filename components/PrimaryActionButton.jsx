const PrimaryActionButton = ({ description, onClick }) => {
  return (
    <button type="button" onClick={onClick} className="button-primary">
      {description}
    </button>
  );
};

export default PrimaryActionButton;