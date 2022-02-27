import React from "react";

export default function GalleryImage({ img, openModal }) {
  const { image, title, credit } = img;

  return (
    <figure>
      <picture>
        <img
          loading="lazy"
          src={image}
          onClick={() => openModal(img)}
          alt={title ? title : `Photograph of ${title}`}
          tabIndex="0"
          onKeyDown={() => handleKeyDown(img)}
          onKeyDown={(e) => e.key === "Enter" && openModal(img)}
          className="hover:cursor-pointer"
        />
      </picture>
      {title ? (
        <figcaption className="text-base pt-2">
          <strong>{title}</strong>
        </figcaption>
      ) : null}
      {credit ? (
        <cite className="text-sm pt-2 italic">{credit}</cite>
      ) : null}
    </figure>
  );
}
