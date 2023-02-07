import { useContext, useEffect, useState } from "react";
import { URI_API } from "../../../Const/const";
import { holidaysContext } from "../../../context/holidaysContext";
import styles from "../Choices/Choices.module.scss";

const holidays = {
  newYear: "Новый год",
  birthdayWomen: "День рождения  Ж",
  birthdayMen: "День рождения  М",
  womenDay: "8 марта",
  knowledgeDay: "День знаний",
};

const Choices = () => {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const {holiday, setHoliday} = useContext(holidaysContext);
  const [holidays, setHolidays] = useState({});
  useEffect(() => {
    fetch(URI_API)
      .then(response => {
        if(response.status !== 200) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => setHolidays(data))
      .catch(err => console.error(err));
  }, [setHolidays])
  const toggleChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  const changeHoliday = title => {
    setHoliday(title);
    toggleChoices();
  }
  
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={toggleChoices}>{holiday}</button>
      {isOpenChoices && (
        <ul className={styles.list}>
          {Object.entries(holidays).map((item) => (
            <li 
              className={styles.item}
              key={item[0]}
              onClick={() => {changeHoliday(item[1])}}
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
