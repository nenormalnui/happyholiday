import Container from "../Container/Container";
import styles from "../Header/Header.module.scss";
import Choices from "./Choices/Choices";

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <button className={styles.button}>Поменять поздравление</button>
          <button className={styles.button}>Поменять фон</button>
        </div>
        <Choices />
      </div>
    </Container>
  </header>
);

export default Header;
