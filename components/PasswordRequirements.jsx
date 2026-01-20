const PasswordRequirements = ({ checks }) => {
  return (
    <ul className="mt-2 space-y-1 text-sm">
      <Requirement ok={checks.length} text="At least 6 characters" />
      <Requirement ok={checks.lowercase} text="One lowercase letter" />
      <Requirement ok={checks.uppercase} text="One uppercase letter" />
      <Requirement ok={checks.number} text="One number" />
      <Requirement ok={checks.symbol} text="One symbol" />
    </ul>
  );
};

const Requirement = ({ ok, text }) => (
  <li
    className={`flex items-center gap-2 ${ok ? "text-green-600" : "text-gray-400"
      }`}
  >
    <span>{ok ? "✔" : "○"}</span>
    {text}
  </li>
);

export default PasswordRequirements;
