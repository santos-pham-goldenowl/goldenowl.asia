import React from 'react';
import { useField, splitFormProps } from 'react-form';

const SelectField = (props) => {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    value = '',
    setValue,
    meta: { error, isTouched },
  } = useField(field, fieldOptions);

  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {isTouched && error ? <em className="error">{error}</em> : null}
      <select {...rest} value={value} onChange={handleSelectChange}>
        <option disabled value="" />
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

const InputField = React.forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props);

  const {
    meta: {
      error, isTouched, isValidating, message,
    },
    getInputProps,
  } = useField(field, fieldOptions);

  const messageRenderer = () => {
    if (isValidating) return <em className="validating">Validating...</em>;
    if (isTouched && error) return <em className="error">{error}</em>;
    return message ? <em>{message}</em> : null;
  }

  return (
    <>
      {messageRenderer()}
      <input {...getInputProps({ ref, ...rest })} />
    </>
  );
});

const InputTextArea = React.forwardRef((props, ref) => {
  const [field, fieldOptions, rest] = splitFormProps(props);

  const {
    meta: {
      error, isTouched, isValidating, message,
    },
    getInputProps,
  } = useField(field, fieldOptions);

  const messageRenderer = () => {
    if (isValidating) return <em className="validating">Validating...</em>;
    if (isTouched && error) return <em className="error">{error}</em>;
    return message ? <em>{message}</em> : null;
  }

  return (
    <>
      {messageRenderer()}
      <textarea {...getInputProps({ ref, ...rest })} />
    </>
  );
});

export { SelectField, InputField, InputTextArea };
