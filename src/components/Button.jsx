import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className="p-4 bg-blue-500 hover:bg-blue-600 rounded cursor-pointer">
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.element,
};

export default Button