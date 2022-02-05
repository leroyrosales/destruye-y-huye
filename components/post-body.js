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
          <div>
            <CoverImage
              title={title}
              src={coverImage}
              height={600}
              width={900}
            />
            {gallery?.map((img, i) => (
              <img src={img} onClick={() => handleClick(img, i)} />
            ))}
            {clickedImg && (
              <Modal
                clickedImg={clickedImg}
                setClickedImg={setClickedImg}
              />
            )}
          </div>
          <article className="mb-8 md:mb-16 sm:mx-0">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>
        </section>
      </Container>
    </>
  );
}
