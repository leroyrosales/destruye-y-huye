import React from "react";

export default function GalleryImage({ img, openModal }) {
  return (
    <figure>
      <picture>
        <img
          loading="lazy"
          src={img.image}
          onClick={() => openModal(img)}
          alt={img.title ? img.title : `Photograph of ${title}`}
          tabIndex="0"
          onKeyDown={() => handleKeyDown(img)}
          onKeyDown={(e) => e.key === "Enter" && openModal(img)}
          className="hover:cursor-pointer"
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
  );
}
