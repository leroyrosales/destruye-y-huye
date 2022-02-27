import { useState } from "react";
import Modal from "./modal.component";
import ReactModal from "react-modal";
import GalleryImage from "./gallery-image.component";

export default function PostBody({ title, gallery, content }) {
  const [clickedImg, setClickedImg] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleClick = (img) => {
    setClickedImg(img);
    console.log(img);
    document.body.style.overflow = "hidden";
  };

  const handleKeyDown = (img) => {
    setClickedImg(img);
  };

  const openModal = (img) => {
    setIsOpen(true);
    setClickedImg(img)
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <section
        className={`grid grid-cols-1 md:gap-8 ${
          content ? "md:grid-cols-2" : ""
        }`}
        id="content"
      >
        <div className="grid grid-cols-1 auto-rows-min md:gap-8 md:grid-cols-2">
          {gallery?.map( (img, i) => (
            <GalleryImage key={i} img={img} openModal={openModal} />
          ))}
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              setClickedImg={setClickedImg}
              locationTitle={title}
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
            />
          )}
        </div>
        {content ? (
          <article>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        ) : null}
      </section>
    </>
  );
}
