import { useState } from "react";
import Modal from "./modal.component";

export default function PostBody({ title, gallery, content }) {
  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (img, i) => {
    setClickedImg(img);
    document.body.style.overflow = "hidden";
  };

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
                  onClick={() => handleClick(img, i)}
                  alt={ img.title ? img.title : `Photograph of ${title}` }
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
