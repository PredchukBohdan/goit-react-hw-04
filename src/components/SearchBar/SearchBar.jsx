import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

export const SearchBar = ({ onSubmits }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.query.value;

    if (inputValue === "") {
      e.target.reset();
      toast("You must enter text to search.");
      return;
    }
    onSubmits(inputValue);
    e.target.reset();
  };
  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
