import { useContext } from "react";
import { textContext } from "../../../context/textContext";
import styles from "./Felicitation.module.scss";

const Felicitation = () => {
  const {text} = useContext(textContext);

  return (
  <p className={styles.felicitation}>
    {text}
  </p>
)};

export default Felicitation;
