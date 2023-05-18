import PropTypes from "prop-types";
import Styles from "./Button.module.css";

function Button({ text }) {
  return <button className={Styles.btn}> {text} </button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Button;
