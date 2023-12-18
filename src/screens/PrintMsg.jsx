import "./printMsg.css";

export const PrintMsg = (props) => {
  const fixedClassName = "print-msg";

  // Combine constant string and dynamic prop value for className
  const combinedClassName = `${fixedClassName} ${props.msg}`;
  return <div className={combinedClassName}>{props.children}</div>;
};
