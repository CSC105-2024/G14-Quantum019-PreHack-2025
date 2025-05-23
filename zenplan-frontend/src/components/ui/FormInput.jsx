import React from "react";

const FormInput = ({ label, icon, type, name, placeholder, error, props }) => {
  return (
    <div className="lg:w-100 w-80 mb-4">
      <label className="block text-sm text-left font-medium text-neutral-700 mb-1">
        {label}
        <span className="text-red-600">*</span>
      </label>
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required
          className="w-full pl-10 rounded-md border py-2 px-4 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-opacity-50
          transition-colors"
          {...props}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
