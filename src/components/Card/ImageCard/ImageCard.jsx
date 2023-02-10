import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";
import CardBg from "../../../img/card-bg.jpg";
const ImageCard = (props) => {
    const {urlImg} = useContext(imgContext);
    console.log(urlImg);
    return (
        <img src={urlImg || CardBg} alt="Фон открытки" width={840} height={520} />
    )
}

export default ImageCard;