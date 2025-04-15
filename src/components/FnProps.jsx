import PropTypes from 'prop-types';

const FnProps = (props) => {
  return (
    <input className="border border-blue-500 rounded px-6 py-4" onChange={(event) => {
      const targetValue = event.target.value;
      props.onLogs(targetValue);
    }} />
  )
}

FnProps.propTypes = {
  onLogs: PropTypes.func,
};

export default FnProps