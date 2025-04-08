import s from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={s.loadMore} onClick={onClick}>
      Load More
    </button>
  );
};
