import React from "react";

export default function InputBox(props) {
  const {
    label,
    autoFocus,
    field,
    form: { touched, errors },
    type,
    disable = false,
  } = props;

  return (
    <React.Fragment>
      <label className="font-semibold block text-gray-700 text-base mb-2 text-left">
        {label}
      </label>
      <input
        // autoFocus={autoFocus === false ? false : true}
        className={
          "appearance-none border w-full rounded md:py-4 px-2 text-gray-700 leading-tight cursor-text"
        }
        name={field.name}
        style={{ borderColor: "#D9D9D9" }}
        type={type}
        {...field}
        {...props}
        // disabled={!!disable}
      />

      {errors[field.name] && (
        <div className="my-1 text-left" style={{ color: "#ff0000" }}>
          {errors[field.name]}
        </div>
      )}
    </React.Fragment>
  );
}

//If needed - Do not Delete
export function TextArea(props) {
  const {
    field,
    form: { touched, errors },
    type,
    disable = false,
  } = props;
  return (
    <React.Fragment>
      <textarea type={type} {...field} {...props} disabled={!!disable} />
      {touched[field.name] && errors[field.name] && (
        <div className="error" style={{ position: "absolute" }}>
          {errors[field.name]}
        </div>
      )}
    </React.Fragment>
  );
}
