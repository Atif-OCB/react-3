import PropTypes from 'prop-types';
import { useId } from 'react';

const Input = (props) => {
  const id = useId();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>
        {props.label}
      </label>
      <input id={id} className="px-6 py-4 rounded border border-slate-500" onChange={(event) => {
        const value = event.target.value;
        props.onUpdateField(value);
      }} />
    </div>
  )
}

Input.propTypes = {
  onUpdateField: PropTypes.func,
  label: PropTypes.string,
};

export default Input