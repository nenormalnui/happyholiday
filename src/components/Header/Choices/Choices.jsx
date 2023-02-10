import { useContext, useState } from "react";
import { holidaysContext } from "../../../context/holidaysContext";
import styles from "../Choices/Choices.module.scss";

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holidays, holiday, changeHoliday } = useContext(holidaysContext);

  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleChoices}>
        {holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={styles.list}>
          {Object.entries(holidays).map((item) => (
            <li
              className={styles.item}
              key={item[0]}
              onClick={() => {
                changeHoliday(item[0]);
                toggleChoices();
              }}
            >
              {item[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choices;
