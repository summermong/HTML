import classNames from 'classnames';
import '../css/Button.css';

type typeChildrenString = {
  title: string;
  size: string;
  color: string;
  outline?: string;
  fullWidth?: string;
  onClick?: () => void;
};

const Button = ({
  title,
  size,
  color,
  outline,
  fullWidth,
  ...rest
}: typeChildrenString) => {
  return (
    <button
      className={classNames('Button', size, color, { outline, fullWidth })}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
