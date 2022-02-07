import { useState } from "react";
import Modal from "./modal.component";
import ReactModal from "react-modal";

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
      >
        <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
          {gallery?.map((img, i) => (
            <figure>
              <picture>
                <img
                  loading="lazy"
                  src={img.image}
                  onClick={() => openModal(img)}
                  alt={img.title ? img.title : `Photograph of ${title}`}
                  tabIndex="0"
                  onKeyDown={() => handleKeyDown(img)}
                  key={i}
                  onKeyDown={e => e.key === 'Enter' && openModal(img)}
                />
              </picture>
              {img.title ? (
                <figcaption className="text-base pt-2">
                  <strong>{img.title}</strong>
                </figcaption>
              ) : null}
              {img.credit ? (
                <cite className="text-sm pt-2 italic">{img.credit}</cite>
              ) : null}
            </figure>
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
