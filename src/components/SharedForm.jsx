const SharedForm = ({ fields, buttonLabel, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 bg-gray-900 p-8 rounded-lg max-w-md mx-auto"
    >
      {fields.map(({ label, type, name, placeholder, options }, index) => (
        <div key={index}>
          <label className="block text-white text-sm mb-2">{label}</label>
          {type === "select" ? (
            <select
              name={name}
              required
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{placeholder}</option>
              {options.map((option, i) => (
                <option key={i} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              required
              className="w-full p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-semibold"
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default SharedForm;

  