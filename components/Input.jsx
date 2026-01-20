
const Input = ({error, name, type, placeholder, value, onChange }) => {
  return (
     <div className="mt-2">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-base ${error ? "input-error" : "input-default"}`}
      />
      {error && (
        <p className="field-error">{error}</p>
      )}
    </div>
   
  );
};

export default Input;