import "./App.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchImagesData } from "./images-api";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import BeatLoader from "react-spinners/BeatLoader";
import Modal from "react-modal";
import { ImageModal } from "./components/ImageModal/ImageModal";

const loaderStyles = {
  display: "block",
  margin: "0 auto",
  width: "fit-content",
  padding: "20px 0",
};
Modal.setAppElement("#root");

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [noResults, setNoResults] = useState(false);

  const abortController = new AbortController();

  useEffect(() => {
    if (!query) return;
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(false);
        setTotalPages(0);
        setNoResults(false);
        const response = await fetchImagesData(
          query,
          page,
          abortController.signal
        );
        if (response.data.total === 0) {
          setNoResults(true);
        } else {
          setImages((prevImages) => [...prevImages, ...response.data.results]);
          setTotalPages(response.data.total_pages);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
    return () => {
      abortController.abort();
    };
  }, [query, page]);

  const handleSearch = (value) => {
    setQuery(value);
    setImages([]);
    setPage(1);
  };
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmits={handleSearch} />
      <div className="container">
        {images.length > 0 ? (
          <ImageGallery images={images} onImageClick={openModal} />
        ) : error ? (
          <ErrorMessage text="An error occurred on the server, please try again." />
        ) : (
          noResults && (
            <ErrorMessage text="No images were found for your request." />
          )
        )}
        {loading && (
          <BeatLoader
            color="#4d02b9"
            loading={loading}
            className="loader"
            cssOverride={loaderStyles}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
        {images.length > 0 && page < totalPages && !loading && (
          <LoadMoreBtn onClick={() => setPage(page + 1)} />
        )}
      </div>
      <ImageModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
    </>
  );
}

export default App;
