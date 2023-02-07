import styles from "../Card/Card.module.scss";
import ImageCard from "./ImageCard/ImageCard";
import Felicitation from "./Felicitation/Felicitation";
import CardBg from "../../img/card-bg.jpg";

const Cart = () => (
  <div className={styles.card}>
   <div className={styles.wrapper}>
    <div className={styles.image}>
      <ImageCard img={CardBg}/>
      <Felicitation/>
      </div>
    </div>
  </div>
);

export default Cart;
