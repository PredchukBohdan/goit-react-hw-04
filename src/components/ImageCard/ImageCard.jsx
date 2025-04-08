import s from "./ImageCard.module.css";

export const ImageCard = ({ image, onImageClick }) => {
  const { urls, alt_description } = image;
  return (
    <div className={s.imageWrapper}>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={() => onImageClick(image)}
        width="500"
      />
    </div>
  );
};
