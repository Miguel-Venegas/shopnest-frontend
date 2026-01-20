const Form = ({ onSubmit, className = "", children }) => {
  return (
    <div className="mt-10 content-column">
      <form onSubmit={onSubmit} className={`space-y-6 ${className}`}>
        {children}
      </form>
    </div>
  );
};

export default Form;