import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";

const ImageCard = (props) => {
    const img = useContext(imgContext);
    return (
        <img className={img} src={img} alt="Фон открытки" width={840} height={520} />
    )
}

export default ImageCard;