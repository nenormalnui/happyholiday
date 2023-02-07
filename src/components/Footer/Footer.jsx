import Container from "../Container/Container";
import styles from "./Footer.module.scss"
import { ReactComponent as VkIcon } from "../../img/vk.svg";
import { ReactComponent as TgIcon } from "../../img/tg.svg";
import { ReactComponent as PnIcon } from "../../img/pinterest.svg";
import { ReactComponent as StIcon } from "../../img/stumbleupon.svg";

const Footer = () => (
    <footer className={styles.footer}>
        <Container>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <p>Design: <a href="https://t.me/Mrshmallowww">Anastasia Ilina</a></p>
                    <p>Сoder: <a href="https://github.com/nenormalnui">Nenormalnui</a></p>
                    <p>© HBCard, 2022</p>
                </div>

                <ul className={styles.social}>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <VkIcon/>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <TgIcon/>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <PnIcon/>
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            <StIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer