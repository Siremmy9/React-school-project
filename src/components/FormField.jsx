const baseClass =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200";

export default function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  options = [],
  className = "",
  ...rest
}) {
  const shared = {
    id: name,
    name,
    value,
    onChange,
    required,
    className: baseClass,
  };

  let control;
  if (type === "textarea") {
    control = <textarea {...shared} rows="4" />;
  } else if (type === "select") {
    control = (
      <select {...shared}>
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  } else {
    control = <input type={type} {...shared} {...rest} />;
  }

  return (
    <div className={className}>
      <label htmlFor={name} className="font-medium text-slate-700">
        {label}{" "}
        {required ? (
          <span className="text-red-600">*</span>
        ) : (
          <span className="font-normal text-slate-400">(optional)</span>
        )}
      </label>
      {control}
    </div>
  );
}
