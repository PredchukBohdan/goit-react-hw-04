import s from "./ErrorMessage.module.css";

export const ErrorMessage = ({ text }) => {
  return <div className={s.errorMessage}>{text}</div>;
};
