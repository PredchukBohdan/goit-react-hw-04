import s from "./ImageGallery.module.css";
import { ImageCard } from "../ImageCard/ImageCard";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.galleryImages}>
      {images.map((image, index) => (
        <li
          className={s.imagesItem}
          key={image.id}
          style={{ "--delay": `${index * 10}ms` }}
        >
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};
