import "./printMsg.css";
import { PropTypes } from "prop-types";

/*
  - This is a print component
  - It will will print its children element with given class color
  - It takes children and class name to print msg and define background color of that msg
*/

export const PrintMsg = (props) => {
  const fixedClassName = "print-msg";

  // Combine constant string and dynamic prop value for className
  const combinedClassName = `${fixedClassName} ${props.msg}`;
  return <div className={combinedClassName}>{props.children}</div>;
};

//prop type for PrintMsg Component
PrintMsg.propTypes = {
  msg: PropTypes.string,
  children: PropTypes.node,
};
