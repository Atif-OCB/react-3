import PropTypes from 'prop-types';

const Title = (props) => {
  const lang = props.lang;
  const isHidden = props.isHidden;

  if (isHidden) {
    return <p>Forbidden</p>
  }

  return (
    <p>
      {lang === "en" && "My name is "}
      {lang === "my" && "Nama saya "}
      {lang === "ru" && "Я "}
      {props.myName}
    </p>
  )
}

Title.propTypes = {
  lang: PropTypes.string,
  isHidden: PropTypes.bool,
  myName: PropTypes.string,
};

export default Title