import { useState } from "react";
import Container from "./container";
import CoverImage from "./cover-image.component";
import Modal from "./modal.component";

export default function PostBody({ title, coverImage, gallery, content }) {
  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (img, i) => {
    setClickedImg(img);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <Container>
        <section className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
          {gallery?.map((img, i) => (
            <div className="mb-4">
              <img src={img.image} onClick={() => handleClick(img, i)} />
              { img.caption ?
                <figcaption className="mt-2 italic">
                  {img.caption}
                </figcaption>
                : null
              }
            </div>
          ))}
          {clickedImg && (
            <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} title={title} />
          )}
        </section>
      </Container>
    </>
  );
}
